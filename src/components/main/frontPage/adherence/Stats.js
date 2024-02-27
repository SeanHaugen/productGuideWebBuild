import { useEffect, useState } from "react"
import axios from "axios"
// import { BarChart } from '@mui/x-charts/BarChart';
import StatsTable from "./StatsTable";
import StatsGraph from "./StatsGraph";
import ordersProcessed from '../../../../Resources/orders.png';
import OM from '../../../../Resources/om.png';
import graphics from '../../../../Resources/graphics.png';
import RC from '../../../../Resources/rc.png';


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
            <h2>Adherence Report 2/21/24</h2>

            <StatsTable stats={stats} />
            <StatsGraph stats={stats} />
            <img src={ordersProcessed} alt="rolling 5 day # of new orders"/>
            <img src={OM} alt="daily order totals" />
            <img src={graphics} alt="daily graphics totals" />
            <img src={RC} alt="production report card" />
            

        </div>
    )
}

export default Stats;
