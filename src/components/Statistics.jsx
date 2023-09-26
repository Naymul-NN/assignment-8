import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell,  } from 'recharts';

const Statistics = () => {
   const[donated,setDonated] = useState(0);
    useEffect(()=>{
        const donationMony = JSON.parse(localStorage.getItem('donations'));
        
        if(donationMony && donationMony.length>0){
            setDonated(donationMony.length);
        }
            
        
        
        
    },[])



    const donationPer = (donated/12)*100;
    const data = [
        { name: 'Your donation', value: 100-donationPer },
        { name: 'Total donation', value: donationPer },
        
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
    
    return (
        <div>
            <p className='text-2xl text-center'>Here we will show you a dynamic chart </p>
            <div className='text-center justify-center items-center flex'>
        
            <PieChart width={400} height={400}>
             <Pie
              data={data}
            cx="50%"
            cy="50%"
             labelLine={false}
            label={renderCustomizedLabel}
               outerRadius={80}
          fill="#8884d8"
           dataKey="value"
                 >
                {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
             ))}
           </Pie>
            </PieChart>   
            </div>
            <div className='flex justify-center '>
                <div className='flex items-center pr-5'>
                  <p>your donation</p>
                  <div className='h-1 w-16 bg-green-600 mt-1 ml-2'></div>
                </div>
                <div className='flex items-center'>
                <p>Total donation</p>
                  <div className='h-1 w-16 bg-blue-600 mt-1 ml-2'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;