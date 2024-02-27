import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';


const chartSetting = {
    yAxis: [
      {
        label: 'Adherence Report',
      },
    ],
    width: 2000,
    height: 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
  
  function StatsGraph({ stats }) {
    if (!stats || stats.length === 0) {
        return <div>No data available</div>;
    }
      let names = stats.map((i) => i.NAME);
      let calls = stats.map((i) => i.CALLS);
      let callExperience = stats.map((i) => i.CALL_EXPERIENCE);
      let sfCallLog = stats.map((i) => i.SF_CALL_LOG_PERCENTAGE);
      let averageHoldTime = stats.map((i) => i.AHT);
      let chats = stats.map((i) => i.CHATS);
  
      function createData(name, calls, callExperience, sfCallLog, averageHoldTime, chats) {
          return { name, calls, callExperience, sfCallLog, averageHoldTime, chats };
      }
  
      let rows = names.map((name, index) => createData(name, calls[index], callExperience[index], sfCallLog[index], averageHoldTime[index], chats[index]));
      rows.pop();



      return (
        <div>
            <BarChart
            className='stats-bar-chart'
              dataset={rows}
              xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
              series={[
                  { dataKey: 'calls', label: 'Calls' },
                  { dataKey: 'callExperience', label: 'Call Experience ' },
                  { dataKey: 'chats', label: 'chats' }
              ]}
              {...chartSetting}
              // Add other chart settings as needed
            />
        </div>
      );
  }
  
  export default StatsGraph;
  
