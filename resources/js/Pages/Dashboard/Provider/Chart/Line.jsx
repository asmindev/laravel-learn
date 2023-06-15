import React, { useState, useEffect } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
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
            text: 'Booking Venue',
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
            display: false, // same as x-axis
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
        console.log(month)
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        console.log(daysInMonth)
        for (let i = 1; i <= daysInMonth; i++) {
            dates.push(i)
        }
        return dates
    })(),
}

const data = (label, dataset) => ({
    labels: labels[label],
    datasets: [
        {
            label: 'Bookings',
            data: dataset,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
            tension: 0.5,
            pointRadius: 5,
            pointHoverRadius: 10,
            fill: true,
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
        },
    ],
})

export default function LineChart({ label, dataset }) {
    return (
        <Line
            data={data('dates', dataset)}
            options={options}
            className="w-full max-h-fit"
        />
    )
}
