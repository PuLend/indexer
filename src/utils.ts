import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts";
import { Market, InterestRateModelConfig } from "../generated/schema";

export const BIGINT_ZERO = BigInt.fromI32(0);
export const BIGINT_WAD = BigInt.fromString("1000000000000000000"); // 1e18

export function getOrCreateMarket(lendingPoolAddress: Bytes): Market {
  let market = Market.load(lendingPoolAddress);
  if (!market) {
    market = new Market(lendingPoolAddress);
    market.totalBorrowAssets = BIGINT_ZERO;
    market.totalSupplyAssets = BIGINT_ZERO;
    market.baseRate = BIGINT_ZERO;
    market.optimalUtilization = BIGINT_ZERO;
    market.rateAtOptimal = BIGINT_ZERO;
    market.maxUtilization = BIGINT_ZERO;
    market.borrowRate = BIGINT_ZERO;
    market.utilization = BIGINT_ZERO;
    market.save();
  }
  return market;
}

export function getOrCreateInterestRateModelConfig(irmAddress: Bytes): InterestRateModelConfig {
  let config = InterestRateModelConfig.load(irmAddress);
  if (!config) {
    config = new InterestRateModelConfig(irmAddress);
    config.scaledPercentage = BIGINT_WAD;
    config.save();
  }
  return config;
}

export function updateBorrowRate(market: Market): void {
  if (market.totalSupplyAssets.equals(BIGINT_ZERO) || market.totalBorrowAssets.equals(BIGINT_ZERO)) {
    market.borrowRate = market.baseRate;
    market.utilization = BIGINT_ZERO;
    market.save();
    return;
  }

  let scaledPercentage = BIGINT_WAD;
  if (market.interestRateModel) {
    let config = getOrCreateInterestRateModelConfig(market.interestRateModel!);
    scaledPercentage = config.scaledPercentage;
  }

  let utilizationRate = market.totalBorrowAssets.times(scaledPercentage).div(market.totalSupplyAssets);
  market.utilization = utilizationRate;

  if (utilizationRate.le(market.optimalUtilization)) {
    // baseRate + ((utilizationRate * (rateAtOptimal - baseRate)) / optimalUtilization)
    if (market.optimalUtilization.equals(BIGINT_ZERO)) {
      market.borrowRate = market.baseRate;
    } else {
      market.borrowRate = market.baseRate.plus(
        utilizationRate.times(market.rateAtOptimal.minus(market.baseRate)).div(market.optimalUtilization)
      );
    }
  } else {
    // rateAtOptimal + ((excessUtilization * (scaledPercentage - rateAtOptimal)) / maxExcessUtilization)
    let excessUtilization = utilizationRate.minus(market.optimalUtilization);
    let maxExcessUtilization = scaledPercentage.minus(market.optimalUtilization);

    if (maxExcessUtilization.equals(BIGINT_ZERO)) {
      market.borrowRate = market.rateAtOptimal;
    } else {
      market.borrowRate = market.rateAtOptimal.plus(
        excessUtilization.times(scaledPercentage.minus(market.rateAtOptimal)).div(maxExcessUtilization)
      );
    }
  }

  market.save();
}
