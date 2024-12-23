import { fetchFinancialSummary } from '@/lib/api'

export default async function FinancialSummary() {
  const summary = await fetchFinancialSummary()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Financial Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Total Revenue:</span>
          <span className="font-semibold">${summary.totalRevenue.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Expenses:</span>
          <span className="font-semibold">${summary.totalExpenses.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Net Income:</span>
          <span className="font-semibold">${summary.netIncome.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Outstanding Balances:</span>
          <span className="font-semibold">${summary.outstandingBalances.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}

