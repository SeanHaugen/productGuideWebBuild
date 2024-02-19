import { useEffect, useState } from "react"
import axios from "axios"
// import { BarChart } from '@mui/x-charts/BarChart';
import StatsTable from "./StatsTable";
import StatsGraph from "./StatsGraph";
import ordersProcessed from '../../../../Resources/orders-line-graph.png';
import OM from '../../../../Resources/om.2.15.png';


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
            <h2>Adherence Report 2/16/24</h2>
            {/* <StatsGraphs /> */}
            <StatsTable stats={stats} />
            <StatsGraph stats={stats} />
            <img src={ordersProcessed} alt="rolling 5 day # of new orders"/>
            <img src={OM} alt="daily order totals" />
            

        </div>
    )
}

export default Stats;
