import React, { useState, useEffect } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Akitivitas Bulanan',
        },
    },
    interaction: {
        intersect: false,
    },
    scales: {
        x: {
            display: true, // show/ hide x-axis
            grid: {
                display: false, // show/hide grid line in x-axis
            },
        },
        y: {
            display: true, // same as x-axis
            grid: {
                display: false,
            },
        },
    },
}

const labels = {
    months: [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
    ],
    days: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    dates: (function () {
        const dates = []
        // get the month and then get full date
        const date = new Date()
        const month = date.getMonth()
        const year = date.getFullYear()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        for (let i = 1; i <= daysInMonth; i++) {
            dates.push(i)
        }
        return dates
    })(),
}

const data = (label, providers, users) => ({
    labels: labels[label],
    datasets: [
        {
            label: 'Penyedia',
            data: providers,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.5,
            pointRadius: 5,
            pointHoverRadius: 10,
            backgroundColor: (context) => {
                const bgColor = [
                    'rgb(75, 192, 192)', // green
                    // transparent
                    'rgba(75, 192, 192, 0)',
                ]
                if (!context.chart.chartArea) {
                    return null
                }
                const {
                    ctx,
                    data,
                    chartArea: { top, bottom },
                } = context.chart
                const gradient = ctx.createLinearGradient(0, top, 0, bottom)
                gradient.addColorStop(0, bgColor[0])
                gradient.addColorStop(0.5, bgColor[1])
                return gradient
            },
            fill: true,
        },
        {
            label: 'Pengguna',
            data: users,
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.5,
            pointRadius: 5,
            pointHoverRadius: 10,
            fill: true,
            backgroundColor: (context) => {
                const bgColor = [
                    'rgb(255, 99, 132)', // red
                    // transparent
                    'rgba(255, 99, 132, 0)', // red
                ]
                if (!context.chart.chartArea) {
                    return null
                }
                const {
                    ctx,
                    data,
                    chartArea: { top, bottom },
                } = context.chart
                const gradient = ctx.createLinearGradient(0, top, 0, bottom)
                gradient.addColorStop(0, bgColor[0])
                gradient.addColorStop(0.5, bgColor[1])
                return gradient
            },
        },
    ],
})

export default function LineChart({ users, providers }) {
    const countUserByDateJoined = () => {
        const result = []
        const date = new Date()
        const month = date.getMonth()
        const year = date.getFullYear()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        for (let i = 1; i <= daysInMonth; i++) {
            const res = users.filter((user) => {
                const date = new Date(user.created_at)
                return date.getDate() === i
            })
            result.push(res.length)
        }
        return result
    }
    const countProviderByDateJoined = () => {
        const result = []
        const date = new Date()
        const month = date.getMonth()
        const year = date.getFullYear()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        for (let i = 1; i <= daysInMonth; i++) {
            const res = providers.filter((provider) => {
                const date = new Date(provider.created_at)
                return date.getDate() === i
            })
            result.push(res.length)
        }
        return result
    }
    users = countUserByDateJoined()
    providers = countProviderByDateJoined()
    console.log({ users, providers })

    return (
        <Line
            data={data('dates', providers, users)}
            options={options}
            className="w-full max-h-fit"
        />
    )
}
