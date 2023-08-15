import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
import CommonHeader from '../CommonHeader/CommonHeader';
const data = [
    {
      name: 'Assignment 1',
      mark: 60,
      percentage: 100,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Assignment 2',
      mark: 59,
      percentage: 98.3,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Assignment 3',
      mark: 60,
      percentage: 100,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Assignment 4',
      mark: 60,
      percentage: 100,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Assignment 6',
      mark: 26,
      percentage: 86.67,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Assignment 7',
      mark: 30,
      percentage: 100,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Assignment 8',
      mark: 29,
      percentage: 96.67,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
const Statistics = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center py-20'>
            <CommonHeader>Statistics</CommonHeader>
            </div>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <ComposedChart
          width={1300}
          height={600}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" /> */}
          <Area type="monotone" dataKey="mark" fill="#8884d8" stroke="#8884d8" />
          {/* <Area type="monotone" dataKey="percentage" stackId="" stroke="#82ca9d" fill="#82ca9d" /> */}
          <Bar dataKey="percentage" barSize={30} fill="#413ea0" />
        </ComposedChart>
        {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Statistics;
{/* <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer> */}