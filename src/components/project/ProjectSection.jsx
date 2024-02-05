import { useEffect, useReducer} from 'react';
import { SectionWrapper } from '../atom/SectionWrapper';
import { Project } from './Project';
import { GITHUB_USERNAME } from '../../lib/config';
import { getListOfUrlRepositoriesUrl } from '../../lib/api-url';
import { Loader } from '../atom/Loader/Loader'
import { reducer } from '../../hooks/useFetch';


export const ProjectSection = () => {
  const [{status, data : repo , error}, dispatch] = useReducer(reducer,{ status : "idle" , data : null, error : null})
  // GitHub Repository - Exercise

  useEffect(() => {
    dispatch({ type : "pending"})
    fetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME))
    .then((res) => res.json())
    .then((repo) => dispatch({ type : "resolved", data : repo}))
    .catch((error) => dispatch({ type : "rejected", error : error}))
    
  },[]);

  if(status === 'pending' || status ==='idle'){
    return <Loader/>
  }

  if(error){
    return <p> error !</p>
  }
  

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap justify-center gap-8">
        {/* GitHub Repository - Exercise (replace this) */}
        {repo?.map((repository) => {
          return <Project key={repository.name} {...repository}/>
        })}
      </div>
    </SectionWrapper>
  );
};
