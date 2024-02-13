import { useEffect, useState } from "react"
import axios from "axios"
// import { BarChart } from '@mui/x-charts/BarChart';
import StatsTable from "./StatsTable";

function Stats () {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = "https://dull-pink-termite-slip.cyclic.app/dashboardData";
                const response = await axios.get(apiUrl);
                setStats(response.data);
            } catch (error) {
                console.error(error, "error fetching api data");
            }
        }
        fetchData();
    }, []);




    return (
        <div>
            <h2>Daily Adherence Report</h2>
            {/* <StatsGraphs /> */}

            <StatsTable stats={stats} />
        </div>
    )
}

export default Stats;