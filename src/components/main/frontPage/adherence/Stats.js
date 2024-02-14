import { useEffect, useState } from "react"
import axios from "axios"
// import { BarChart } from '@mui/x-charts/BarChart';
import StatsTable from "./StatsTable";
import StatsGraph from "./StatsGraph";
import orderHistory from '../../../../Resources/rolling-5-day.png';
import ordersProcessed from '../../../../Resources/Screenshot 2024-02-14 100639.png';

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
            <h2>Adherence Report 2/12/24</h2>
            {/* <StatsGraphs /> */}

            <StatsTable stats={stats} />
            <StatsGraph stats={stats} />
            <img src={orderHistory} alt="rolling 4 day # of new orders"/>
<<<<<<< HEAD
            <img src={ordersProcessed} alt="daily order totals" />
=======
            <img src={ordersProcessed} alt="dailing order totals" />
            
>>>>>>> c12e378693d476e463b920bcf3ec3071280e4c16
        </div>
    )
}

export default Stats;
