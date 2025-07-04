"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Thermometer, Droplets, Wind, Sun, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data for demonstration
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

  const [currentData, setCurrentData] = useState({
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

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">IoT Dashboard</h1>
          <p className="text-gray-600">Monitor and control your greenhouse systems</p>
        </div>

        {/* Current Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Temperature</p>
                  <p className="text-2xl font-bold text-green-600">{currentData.temperature}°C</p>
                </div>
                <Thermometer className="h-8 w-8 text-green-600" />
              </div>
              <div className="mt-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Normal
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Humidity</p>
                  <p className="text-2xl font-bold text-blue-600">{currentData.humidity}%</p>
                </div>
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mt-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  Optimal
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Soil Moisture</p>
                  <p className="text-2xl font-bold text-amber-600">{currentData.soilMoisture}%</p>
                </div>
                <Droplets className="h-8 w-8 text-amber-600" />
              </div>
              <div className="mt-2">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Low
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Light Level</p>
                  <p className="text-2xl font-bold text-yellow-600">{currentData.lightLevel}%</p>
                </div>
                <Sun className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="mt-2">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Good
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Device Controls */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Device Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Droplets className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Irrigation System</p>
                    <p className="text-sm text-gray-600">Auto watering based on soil moisture</p>
                  </div>
                </div>
                <Switch checked={devices.irrigation} onCheckedChange={() => toggleDevice("irrigation")} />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Wind className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="font-medium">Ventilation Fan</p>
                    <p className="text-sm text-gray-600">Temperature and air circulation control</p>
                  </div>
                </div>
                <Switch checked={devices.ventilation} onCheckedChange={() => toggleDevice("ventilation")} />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Droplets className="h-6 w-6 text-cyan-600" />
                  <div>
                    <p className="font-medium">Misting System</p>
                    <p className="text-sm text-gray-600">Humidity control and cooling</p>
                  </div>
                </div>
                <Switch checked={devices.misting} onCheckedChange={() => toggleDevice("misting")} />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Thermometer className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-medium">Heating System</p>
                    <p className="text-sm text-gray-600">Temperature regulation for cold weather</p>
                  </div>
                </div>
                <Switch checked={devices.heating} onCheckedChange={() => toggleDevice("heating")} />
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">System Health</span>
                  <span className="text-sm text-green-600">98%</span>
                </div>
                <Progress value={98} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Network Connection</span>
                  <span className="text-sm text-green-600">Strong</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Battery Backup</span>
                  <span className="text-sm text-green-600">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Recent Alerts</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Low soil moisture detected - Zone 2</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Irrigation system activated</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Temperature normalized</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="mt-8">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Environmental Data (24 Hours)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sensorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="temperature"
                      stroke="#16a34a"
                      strokeWidth={2}
                      name="Temperature (°C)"
                    />
                    <Line type="monotone" dataKey="humidity" stroke="#2563eb" strokeWidth={2} name="Humidity (%)" />
                    <Line
                      type="monotone"
                      dataKey="soilMoisture"
                      stroke="#d97706"
                      strokeWidth={2}
                      name="Soil Moisture (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
