"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Thermometer, Droplets, Wind, Sun, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const sensorData = [
  { time: "00:00", temperature: 24, humidity: 65, soilMoisture: 45 },
  { time: "04:00", temperature: 22, humidity: 70, soilMoisture: 42 },
  { time: "08:00", temperature: 26, humidity: 60, soilMoisture: 38 },
  { time: "12:00", temperature: 30, humidity: 55, soilMoisture: 35 },
  { time: "16:00", temperature: 28, humidity: 58, soilMoisture: 40 },
  { time: "20:00", temperature: 25, humidity: 62, soilMoisture: 43 },
]

export default function DashboardPage() {
  const [devices, setDevices] = useState({
    irrigation: false,
    ventilation: true,
    misting: false,
    heating: false,
  })

  const [currentData] = useState({
    temperature: 26.5,
    humidity: 62,
    soilMoisture: 41,
    lightLevel: 75,
  })

  const toggleDevice = (device: string) => {
    setDevices((prev) => ({
      ...prev,
      [device]: !prev[device as keyof typeof prev],
    }))
  }

  const metrics = [
    {
      label: "Temperature",
      value: `${currentData.temperature}°C`,
      icon: Thermometer,
      badge: (
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <TrendingUp className="mr-1 h-3 w-3" />
          Normal
        </Badge>
      ),
    },
    {
      label: "Humidity",
      value: `${currentData.humidity}%`,
      icon: Droplets,
      badge: (
        <Badge variant="secondary">
          <TrendingDown className="mr-1 h-3 w-3" />
          Optimal
        </Badge>
      ),
    },
    {
      label: "Soil moisture",
      value: `${currentData.soilMoisture}%`,
      icon: Droplets,
      badge: (
        <Badge variant="secondary" className="bg-amber-100 text-amber-900">
          <AlertTriangle className="mr-1 h-3 w-3" />
          Low
        </Badge>
      ),
    },
    {
      label: "Light level",
      value: `${currentData.lightLevel}%`,
      icon: Sun,
      badge: (
        <Badge variant="secondary">
          <TrendingUp className="mr-1 h-3 w-3" />
          Good
        </Badge>
      ),
    },
  ]

  const controls = [
    {
      key: "irrigation",
      title: "Irrigation system",
      desc: "Auto watering based on soil moisture",
      icon: Droplets,
    },
    {
      key: "ventilation",
      title: "Ventilation fan",
      desc: "Temperature and air circulation control",
      icon: Wind,
    },
    {
      key: "misting",
      title: "Misting system",
      desc: "Humidity control and cooling",
      icon: Droplets,
    },
    {
      key: "heating",
      title: "Heating system",
      desc: "Temperature regulation for cold weather",
      icon: Thermometer,
    },
  ] as const

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="section-container py-10 md:py-12">
        <header className="mb-8">
          <h1 className="font-display text-3xl font-semibold text-foreground">IoT dashboard</h1>
          <p className="mt-1 text-muted-foreground">Monitor and control greenhouse systems (demo)</p>
        </header>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{m.label}</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-primary">{m.value}</p>
                </div>
                <m.icon className="h-7 w-7 text-primary/70" aria-hidden />
              </div>
              <div className="mt-3">{m.badge}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Device controls</h2>
            <div className="mt-5 space-y-3">
              {controls.map((c) => (
                <div
                  key={c.key}
                  className="flex items-center justify-between gap-4 rounded-md border border-border p-4"
                >
                  <div className="flex items-center gap-3">
                    <c.icon className="h-5 w-5 text-primary" aria-hidden />
                    <div>
                      <p className="font-medium text-foreground">{c.title}</p>
                      <p className="text-sm text-muted-foreground">{c.desc}</p>
                    </div>
                  </div>
                  <Switch
                    checked={devices[c.key]}
                    onCheckedChange={() => toggleDevice(c.key)}
                    aria-label={`Toggle ${c.title}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">System status</h2>
            <div className="mt-5 space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>System health</span>
                  <span className="text-primary">98%</span>
                </div>
                <Progress value={98} className="h-2" />
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Network connection</span>
                  <span className="text-primary">Strong</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Battery backup</span>
                  <span className="text-primary">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="mb-3 text-sm font-medium">Recent alerts</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden />
                    Low soil moisture detected — Zone 2
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                    Irrigation system activated
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden />
                    Temperature normalized
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-border bg-card p-6">
          <h2 className="font-display text-lg font-semibold">Environmental data (24 hours)</h2>
          <div className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temperature" stroke="hsl(152 55% 28%)" strokeWidth={2} name="Temp (°C)" />
                <Line type="monotone" dataKey="humidity" stroke="hsl(200 55% 40%)" strokeWidth={2} name="Humidity (%)" />
                <Line
                  type="monotone"
                  dataKey="soilMoisture"
                  stroke="hsl(40 55% 45%)"
                  strokeWidth={2}
                  name="Soil moisture (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
