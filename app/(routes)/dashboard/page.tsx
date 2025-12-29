import Stats from "@/app/(routes)/dashboard/components/Stats";
import TrafficChart from "@/app/(routes)/dashboard/components/TrafficChart";
import TopPages from "@/app/(routes)/dashboard/components/TopPages";
import Devices from "@/app/(routes)/dashboard/components/devices";
import Countries from "@/app/(routes)/dashboard/components/countries";


export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Stats />
      <TrafficChart />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TopPages />
        </div>

        <div className="space-y-6">
          <Devices />
          <Countries />
        </div>
      </div>
    </div>
  );
}
