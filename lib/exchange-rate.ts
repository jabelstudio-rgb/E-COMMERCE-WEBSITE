export type ExchangeRateSnapshot = {
  providerName: string;
  fetchedRate: number;
  manualOverrideRate?: number | null;
  timestamp: Date;
};

export function getEffectiveRate(snapshot: ExchangeRateSnapshot): number {
  return snapshot.manualOverrideRate ?? snapshot.fetchedRate;
}
