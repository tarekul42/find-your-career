import React, { useEffect, useState } from 'react';
import CommonHeader from '../CommonHeader/CommonHeader';
import CombinedTitle from '../CombinedTitle/CombinedTitle';
import './JobDetails.css'
import JobDetailsDesc from '../JobDetailsDesc/JobDetailsDesc';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../Utilities/FakeDB';

const JobDetails = () => {

    const [data, setData] = useState([])
    const {job_description, job_responsibility, educational_requirements, experience, salary_range, job_title, phone, email, address} = data;
    
    useEffect(() =>{
        const getFromLocalStore = () =>{
            const storedDataFromLocalStor = localStorage.getItem('viewDetails')
            const storedData = JSON.parse(storedDataFromLocalStor)
            return storedData;
        }
        setData(getFromLocalStore());
        
    } ,[])
    
    
    
    const [jobs, setJobs] = useState([]);
    const handleApplyNow = id =>{
        let newJobs = [];
        const exists = jobs.find(pd => pd.id === data.id);
        if(!exists){
            data.quantity = 1;
            newJobs = [...jobs, data]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = jobs.filter(pd => pd.id !== data.id);
            newJobs = [...remaining, exists]
        }

        setJobs(newJobs);
        addToDb(data.id)
    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center py-20'>
            <CommonHeader>Job Details</CommonHeader>
            </div>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className=''>
                        <CombinedTitle>Job Description: </CombinedTitle>
                        <JobDetailsDesc>{ job_description}</JobDetailsDesc>
                         
                    </div>
                    <div className='py-6'>
                        <CombinedTitle>Job Responsibility: </CombinedTitle> <JobDetailsDesc>{ job_responsibility}</JobDetailsDesc>
                    </div>
                    <CombinedTitle>Educational Requirements: </CombinedTitle>
                    <JobDetailsDesc>{educational_requirements}</JobDetailsDesc>
                    <div className='py-6'>
                    <CombinedTitle>Experiences:</CombinedTitle>
                    <JobDetailsDesc>{experience}</JobDetailsDesc>
                    </div>
                    
                </div>
                <div className='mx-4'>
                    <div className='bg-slate-200 rounded-lg p-4'>
                        <div className='web-name-title'>Job Details</div>
                        <hr className='border-1 my-4 border-slate-600' />
                        <div className='flex items-start pb-3'>
                        <CurrencyDollarIcon className="h-6 w-6 text-blue-400" /> &nbsp;
                            <CombinedTitle>Salary: </CombinedTitle>
                            <JobDetailsDesc>&nbsp;{ salary_range}(Per Year)</JobDetailsDesc>
                        </div>
                        <div className='flex items-center'>
                        <CalendarDaysIcon className="h-6 w-6 text-blue-400" /> &nbsp;
                            <CombinedTitle>Job Title: </CombinedTitle>
                            <JobDetailsDesc>&nbsp;{ job_title}</JobDetailsDesc>
                        </div>

                        <div className='web-name-title pt-3'>Contact Information</div>
                        <hr className='border-1 my-4 border-slate-600' />
                        <div className='flex items-center'>
                        <PhoneIcon className="h-6 w-6 text-blue-400" /> &nbsp;
                            <CombinedTitle>Phone: </CombinedTitle>
                            <JobDetailsDesc>&nbsp;{ phone}</JobDetailsDesc>
                        </div>
                        <div className='flex items-center py-3'>
                        <EnvelopeIcon className="h-6 w-6 text-blue-400" /> &nbsp;
                            <CombinedTitle>Email: </CombinedTitle>
                            <JobDetailsDesc>&nbsp;{ email}</JobDetailsDesc>
                        </div>
                        <div className='flex items-start'>
                        <MapPinIcon className="h-6 w-6 text-blue-400" /> &nbsp;
                            <CombinedTitle>Address: </CombinedTitle>
                            <JobDetailsDesc>&nbsp;{ address}</JobDetailsDesc>
                        </div>
                    </div>
                    <div className='text-center py-3'>
                        <span onClick={() => handleApplyNow(data)}>
                        <button className='applyNowButton'>Apply Now</button>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;