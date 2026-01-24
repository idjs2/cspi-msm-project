import { useEffect, useState } from "react";
import { Card, CardContent, Button, Input, Badge } from "../ui/index.js";
import { Database, RefreshCw, CheckCircle, XCircle } from "lucide-react";

function AlarmDashboard () {
  const [pollingInterval, setPollingInterval] = useState(30);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [dbStatus, setDbStatus] = useState("connected"); // connected | disconnected

  const alarms = [
    {
      server: "APP-SERVER-01",
      alarm: "CPU 사용률 임계 초과",
      owner: "김운영",
      sop: "SOP-CPU-001",
      status: "조치중",
    },
    {
      server: "DB-SERVER-02",
      alarm: "DB Connection Error",
      owner: "이DB",
      sop: "SOP-DB-003",
      status: "미조치",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdated(new Date());
      // 실제 환경에서는 여기서 DB polling + 알람 갱신
    }, pollingInterval * 1000);
    return () => clearInterval(timer);
  }, [pollingInterval]);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">🚨 운영 알람 대시보드</h1>
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4" />
          {dbStatus === "connected" ? (
            <Badge className="bg-green-600">DB 연결 정상</Badge>
          ) : (
            <Badge variant="destructive">DB 연결 끊김</Badge>
          )}
        </div>
      </div>

      {/* Control Panel */}
      <Card>
        <CardContent className="flex flex-wrap gap-6 items-center p-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Polling 주기(초)</span>
            <Input
              type="number"
              value={pollingInterval}
              onChange={(e) => setPollingInterval(Number(e.target.value))}
              className="w-24"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="w-4 h-4" />
            Last Update: {lastUpdated.toLocaleTimeString()}
          </div>
        </CardContent>
      </Card>

      {/* Alarm Table */}
      <Card>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr className="text-left">
                <th className="p-3 font-bold">서버명</th>
                <th className="p-3 font-bold">알람명</th>
                <th className="p-3 font-bold">담당자</th>
                <th className="p-3 font-bold">SOP</th>
                <th className="p-3 font-bold">조치현황</th>
              </tr>
            </thead>
            <tbody>
              {alarms.map((a, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="p-3 font-medium">{a.server}</td>
                  <td className="p-3">{a.alarm}</td>
                  <td className="p-3">{a.owner}</td>
                  <td className="p-3 text-blue-600 underline cursor-pointer">{a.sop}</td>
                  <td className="p-3">
                    {a.status === "조치중" && <Badge>조치중</Badge>}
                    {a.status === "미조치" && <Badge variant="destructive">미조치</Badge>}
                    {a.status === "완료" && (
                      <Badge className="bg-green-600">완료</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
export default AlarmDashboard;