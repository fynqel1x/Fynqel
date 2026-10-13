import React, { useState, useEffect } from 'react';

const FynqelDashboard = () => {
  // Sample Data
  const summaryData = [
    { label: 'Total Balance', value: '$24,500.00', trend: '+2.5%' },
    { label: 'Monthly Income', value: '$5,200.00', trend: '+12%' },
    { label: 'Total Expenses', value: '$1,850.40', trend: '-5%' },
    { label: 'Total Savings', value: '$8,400.00', trend: '+8%' },
  ];

  const transactions = [
    { id: 1, name: 'Apple Store', date: 'Oct 12', amount: '-$999.00', category: 'Tech' },
    { id: 2, name: 'Monthly Salary', date: 'Oct 10', amount: '+$5,200.00', category: 'Income' },
    { id: 3, name: 'Starbucks Coffee', date: 'Oct 09', amount: '-$6.50', category: 'Food' },
    { id: 4, name: 'Netflix Subscription', date: 'Oct 08', amount: '-$15.99', category: 'Entertainment' },
    { id: 5, name: 'Freelance Project', date: 'Oct 05', amount: '+$850.00', category: 'Income' },
  ];

  const chartData = [
    { month: 'May', value: 45 },
    { month: 'Jun', value: 52 },
    { month: 'Jul', value: 38 },
    { month: 'Aug', value: 65 },
    { month: 'Sep', value: 48 },
    { month: 'Oct', value: 70 },
  ];

  // Inline Styles
  const styles = {
    container: {
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
      maxWidth: '1200px',
      margin: '0 auto 30px auto',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#10b981', // Emerald 500
      letterSpacing: '-1px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #334155',
    },
    cardLabel: {
      color: '#94a3b8',
      fontSize: '14px',
      marginBottom: '8px',
    },
    cardValue: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    trend: {
      color: '#10b981',
      fontSize: '12px',
      marginTop: '4px',
    },
    mainSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '20px auto 0 auto',
    },
    chartContainer: {
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #334155',
      minHeight: '300px',
    },
    chartBarWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height: '200px',
      marginTop: '20px',
    },
    bar: (height) => ({
      width: '30px',
      height: `${height}%`,
      backgroundColor: '#10b981',
      borderRadius: '4px 4px 0 0',
      transition: 'height 0.3s ease',
    }),
    transactionList: {
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #334155',
    },
    transactionItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #334155',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Fynqel</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#334155' }}></div>
          <span style={{ fontSize: '14px' }}>Alex Doe</span>
        </div>
      </header>

      {/* Summary Cards */}
      <div style={styles.grid}>
        {summaryData.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardLabel}>{item.label}</div>
            <div style={styles.cardValue}>{item.value}</div>
            <div style={styles.trend}>{item.trend} from last month</div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div style={styles.mainSection}>
        {/* Simple Custom Bar Chart */}
        <div style={styles.chartContainer}>
          <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Expenses Analytics</h3>
          <div style={styles.chartBarWrapper}>
            {chartData.map((data, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={styles.bar(data.value)}></div>
                <div style={{ fontSize: '12px', marginTop: '8px', color: '#94a3b8' }}>{data.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div style={styles.transactionList}>
          <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Recent Transactions</h3>
          {transactions.map((t) => (
            <div key={t.id} style={styles.transactionItem}>
              <div>
                <div style={{ fontWeight: '500', fontSize: '14px' }}>{t.name}</div>
                <div style={{ color: '#94a3b8', fontSize: '12px' }}>{t.date} • {t.category}</div>
              </div>
              <div style={{ 
                fontWeight: 'bold', 
                color: t.amount.startsWith('+') ? '#10b981' : '#f8fafc' 
              }}>
                {t.amount}
              </div>
            </div>
          ))}
          <button style={{ 
            width: '100%', 
            padding: '10px', 
            marginTop: '15px', 
            backgroundColor: 'transparent', 
            border: '1px solid #334155', 
            color: '#10b981',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            View All
          </button>
        </div>
      </div>

      {/* Global CSS for responsiveness without external file */}
      <style>{`
        @media (max-width: 768px) {
          body { padding: 10px; }
          div { box-sizing: border-box; }
        }
      `}</style>
    </div>
  );
};

export default FynqelDashboard;
