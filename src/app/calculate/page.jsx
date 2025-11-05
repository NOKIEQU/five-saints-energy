"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
export default function CalculatePage() {
  const [current, setCurrent] = useState('')
  const [saving, setSaving] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const fmt = (v) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(v)

  const parseNum = (v) => {
    if (v === '' || v === null || v === undefined) return null
    const cleaned = String(v).replace(/[^0-9.-]+/g, '')
    const n = Number(cleaned)
    return Number.isFinite(n) ? n : null
  }

  function handleCalculate(e) {
    e.preventDefault()
    const c = parseNum(current)
    const s = parseNum(saving)
    if (c === null || c <= 0) {
      setError('Please enter your current monthly electricity bill (greater than 0).')
      setResult(null)
      return
    }
    if (s === null || s < 0) {
      setError('Please enter the expected monthly saving (0 or greater).')
      setResult(null)
      return
    }

    setError('')
    const monthlySaved = s
    const annualSaved = monthlySaved * 12
    const percent = (monthlySaved / c) * 100
    const newMonthly = c - monthlySaved

    setResult({ monthlySaved, annualSaved, percent, newMonthly })
  }

  function handleReset() {
    setCurrent('')
    setSaving('')
    setResult(null)
    setError('')
  }

  return (
    <main className="h-full min-h-screen bg-white font-sans">
      

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-green-600 to-teal-700 text-white">
        <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">How to use this calculator</h2>
            <ol className="list-decimal list-inside text-gray-700 mt-3 space-y-2">
              <li>Enter your current average monthly electricity bill (in £).</li>
              <li>Enter the estimated monthly saving you expect after improvements (in £).</li>
              <li>Click Calculate to see monthly and annual savings, percent reduction and your new estimated monthly bill.</li>
            </ol>
            <p className="mt-3 text-sm text-gray-600">Tip: use your last 12 months' bills divided by 12 for a more accurate monthly average. This calculator gives an estimate only — for an exact quote, request a free survey.</p>
          </div>

          <form onSubmit={handleCalculate} className="space-y-6">
            <div>
              <label htmlFor="current" className="block text-sm font-medium text-gray-700">Current monthly electricity bill (£)</label>
              <div className="mt-1">
                <input
                  id="current"
                  name="current"
                  type="text"
                  inputMode="decimal"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 text-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g. 85.50"
                />
              </div>
            </div>

             <div>
              <label htmlFor="saving" className="block text-sm font-medium text-gray-700">Estimated monthly saving (£)</label>
              <div className="mt-1">
                <input
                  id="saving"
                  name="saving"
                  type="text"
                  inputMode="decimal"
                  value={saving}
                  onChange={(e) => setSaving(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 text-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g. 25"
                />
              </div>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="flex items-center gap-3">
              <Button type="submit" size="lg" className="font-semibold">Calculate</Button>
              <Button type="button" variant="outline" size="lg" onClick={handleReset}>Reset</Button>
              <Link href="/contact" className="ml-auto">
                <Button variant="ghost">Get a free survey</Button>
              </Link>
            </div>
          </form>

          {result && (
            <div className="mt-8 rounded-md bg-primary/5 p-6">
              <h3 className="text-xl font-semibold mb-3">Estimated savings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-md shadow-sm">
                  <p className="text-sm text-gray-500">Monthly saved</p>
                    <p className="text-2xl font-extrabold mt-1 text-yellow-300">{fmt(result.monthlySaved)}</p>
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm">
                  <p className="text-sm text-gray-500">Annual saved</p>
                    <p className="text-2xl font-extrabold mt-1 text-yellow-300">{fmt(result.annualSaved)}</p>
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm">
                  <p className="text-sm text-gray-500">Percent reduction</p>
                    <p className="text-2xl font-extrabold mt-1 text-yellow-300">{result.percent.toFixed(1)}%</p>
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm">
                  <p className="text-sm text-gray-500">New monthly bill</p>
                    <p className="text-2xl font-extrabold mt-1 text-yellow-300">{fmt(result.newMonthly)}</p>
                </div>
              </div>

              <div className="mt-6 text-gray-700">
                <h4 className="font-medium mb-2">What this means</h4>
                <p>Your estimated monthly and annual savings are based on the numbers you provided. Use these figures to decide whether to request a free survey — many customers qualify for funded improvements that reduce or eliminate installation costs.</p>
                <p className="mt-3">If you'd like a precise assessment, book a free home survey and we'll provide a tailored quote, eligibility check for grants, and an installation plan.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
