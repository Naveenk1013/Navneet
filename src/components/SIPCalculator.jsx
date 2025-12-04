import React, { useState, useEffect } from 'react';
import './SIPCalculator.css';
import StarBorder from './StarBorder';
import GradientText from './GradientText';

const SIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [duration, setDuration] = useState(10);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [results, setResults] = useState(null);

    useEffect(() => {
        calculateReturns();
    }, [monthlyInvestment, duration, expectedReturn]);

    const calculateReturns = () => {
        const P = monthlyInvestment;
        const n = duration * 12; // Total months
        const r = expectedReturn / 100 / 12; // Monthly rate

        // SIP Future Value Formula: FV = P × [(1 + r)^n - 1] / r × (1 + r)
        const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
        const investedAmount = P * n;
        const estimatedReturns = futureValue - investedAmount;

        setResults({
            futureValue: Math.round(futureValue),
            investedAmount: Math.round(investedAmount),
            estimatedReturns: Math.round(estimatedReturns),
        });
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const getPercentage = () => {
        if (!results) return 0;
        return ((results.estimatedReturns / results.investedAmount) * 100).toFixed(1);
    };

    return (
        <div className="sip-calculator-wrapper">
            <StarBorder as="div" color="#00FFAA" speed="10s" thickness={2}>
                <div className="sip-calculator">
                    <div className="sip-header">
                        <h2 className="sip-title">
                            <GradientText
                                colors={["#00FFAA", "#0099FF", "#00FFAA"]}
                                animationSpeed={5}
                                showBorder={false}
                            >
                                SIP Calculator
                            </GradientText>
                        </h2>
                        <p className="sip-subtitle">Plan Your Wealth Journey</p>
                    </div>

                    <div className="sip-inputs">
                        <div className="input-group">
                            <label htmlFor="monthly-investment">
                                <span className="label-text">Monthly Investment</span>
                                <span className="value-display">{formatCurrency(monthlyInvestment)}</span>
                            </label>
                            <input
                                type="range"
                                id="monthly-investment"
                                min="500"
                                max="100000"
                                step="500"
                                value={monthlyInvestment}
                                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                className="slider"
                            />
                            <div className="range-labels">
                                <span>₹500</span>
                                <span>₹1L</span>
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="duration">
                                <span className="label-text">Investment Duration</span>
                                <span className="value-display">{duration} {duration === 1 ? 'Year' : 'Years'}</span>
                            </label>
                            <input
                                type="range"
                                id="duration"
                                min="1"
                                max="30"
                                step="1"
                                value={duration}
                                onChange={(e) => setDuration(Number(e.target.value))}
                                className="slider"
                            />
                            <div className="range-labels">
                                <span>1 Yr</span>
                                <span>30 Yrs</span>
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="expected-return">
                                <span className="label-text">Expected Annual Return</span>
                                <span className="value-display">{expectedReturn}%</span>
                            </label>
                            <input
                                type="range"
                                id="expected-return"
                                min="1"
                                max="30"
                                step="0.5"
                                value={expectedReturn}
                                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                                className="slider"
                            />
                            <div className="range-labels">
                                <span>1%</span>
                                <span>30%</span>
                            </div>
                        </div>
                    </div>

                    {results && (
                        <div className="sip-results">
                            <div className="result-card primary">
                                <span className="result-label">Future Value</span>
                                <span className="result-value primary-value">{formatCurrency(results.futureValue)}</span>
                                <div className="result-icon">🎯</div>
                            </div>

                            <div className="result-card">
                                <span className="result-label">Total Invested</span>
                                <span className="result-value">{formatCurrency(results.investedAmount)}</span>
                                <div className="result-icon">💰</div>
                            </div>

                            <div className="result-card success">
                                <span className="result-label">Est. Returns</span>
                                <span className="result-value success-value">{formatCurrency(results.estimatedReturns)}</span>
                                <div className="result-icon">📈</div>
                                <span className="result-percentage">+{getPercentage()}%</span>
                            </div>

                            <div className="progress-chart">
                                <div className="chart-bar">
                                    <div
                                        className="invested-bar"
                                        style={{ width: `${(results.investedAmount / results.futureValue) * 100}%` }}
                                    >
                                        <span className="bar-label">Invested</span>
                                    </div>
                                    <div
                                        className="returns-bar"
                                        style={{ width: `${(results.estimatedReturns / results.futureValue) * 100}%` }}
                                    >
                                        <span className="bar-label">Returns</span>
                                    </div>
                                </div>
                                <div className="chart-legend">
                                    <div className="legend-item">
                                        <span className="legend-color invested"></span>
                                        <span>Invested Amount</span>
                                    </div>
                                    <div className="legend-item">
                                        <span className="legend-color returns"></span>
                                        <span>Estimated Returns</span>
                                    </div>
                                </div>
                            </div>

                            <p className="disclaimer">
                                *Returns are approximate and subject to market conditions. Past performance does not guarantee future results.
                            </p>
                        </div>
                    )}
                </div>
            </StarBorder>
        </div>
    );
};

export default SIPCalculator;
