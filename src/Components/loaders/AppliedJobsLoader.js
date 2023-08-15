import { getAppliedJobs } from '../Utilities/FakeDB'

const AppliedJobsLoader = async () =>{
    const loadedJobs = await fetch('featuresJobs.json');
    const data = await loadedJobs.json();

    // if jobs data is in database, you have to use async await
    const storedJobs = getAppliedJobs();
    const savedJobs = [];
    
    for(const id in storedJobs){
        const addedJobs = data.find(pd => pd.id == id);
        // const addedJobs = data.find(pd => console.log(pd.id == id));
        if(addedJobs){
            const quantity = storedJobs[id];
            addedJobs.quantity = quantity;
            savedJobs.push(addedJobs)
        }
    }
    return savedJobs;
}
AppliedJobsLoader()
export default AppliedJobsLoader;