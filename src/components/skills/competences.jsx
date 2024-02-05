import { useEffect, useState, useRef } from "react"
import js from "../../img/js.svg"
import rjs from "../../img/rjs.svg"
import njs from "../../img/njs.svg"
import css from "../../img/css.svg"
import html from "../../img/html.svg"
import twc from "../../img/twc.svg"
import fsty from "../../img/fastify.svg"
import git from "../../img/git.svg"
import main from "../../img/main.svg"
import clsx from "clsx";
import Image from "next/image";
import styles from "./competences.module.css";

const useRefSkills = () => {
  const GIT = useRef(null)
  const JS = useRef(null)
  const RJS = useRef(null)
  const NJS = useRef(null)
  const CSS = useRef(null)
  const HTML = useRef(null)
  const TWC = useRef(null)
  const FSTY = useRef(null)
  
  return { JS, RJS, NJS, CSS, HTML, TWC, FSTY, GIT }

}

export const Title = () => {

  
return <Image className={clsx(" flex justify-center items-center absolute w-[80px] h-[80px] rounded-[50%] pointer z-50")}
 src={main}
  width={150}
  height={150}
 />
}

export const Skills = () => {
  const [ active, setActive ] = useState(false)
  const { JS, RJS, NJS, CSS, HTML, TWC, FSTY, GIT } = useRefSkills()

  
    

    useEffect(() => {
      setTimeout(() => {
        setActive(true)
      }, 4500 );
      return () => {
        
      };
    }, []);
  
  
   

    return (
      <>
        
        <div  className="flex flex-wrap space justify-evenly items-center text-center">
        <h2 className="text-center w-full pb-[55px]">mon Stack</h2>
        
      
        
        <div ref={JS} className={clsx(" xl:px-0 opacity-0 flex flex-col sm:px-3  pb-3 ")}>
        { active ? JS.current.classList.add( [styles.fade], [styles.transformation],[styles.zero]) : null  }
          <Image 
          src={js}
          width={80} 
          height={80} 
          alt="" 
          />
          <span>JavaScript</span>
        </div>
        
          <div ref={RJS} className={clsx("xl:px-0 opacity-0 flex flex-col px-2 pb-3 ")}>
        { active ? RJS.current.classList.add([styles.fade], [styles.transformation], [styles.un] ) : null  }
          <Image 
          src={rjs}
          width={80} 
          height={80} 
          alt="" />
          <span>ReactJS</span>
        </div>

        <div ref={NJS} className={clsx(" opacity-0 xl:px-0 flex flex-col px-2 pb-3 ")}>
        { active ? NJS.current.classList.add([styles.fade], [styles.transformation], [styles.deux]) : null  }
          <Image 
          src={njs}
          width={80} 
          height={80} 
          alt="" />
          <span>NodeJS</span>
        </div>

        <div ref={CSS} className={clsx("xl:px-0 opacity-0 flex flex-col px-2 pb-3  ")}>
        { active ? CSS.current.classList.add([styles.fade], [styles.transformation], [styles.trois]) : null  }
          <Image 
          src={css}
          width={80} 
          height={80} 
          alt="" />
          <span>CSS</span>
        </div>

        <div ref={HTML} className={clsx(" xl:px-0 opacity-0  flex flex-col px-2 pb-3 ")}>
        { active ? HTML.current.classList.add([styles.fade], [styles.transformation], [styles.quatre]) : null  }
          <Image 
          src={html}
          width={80} 
          height={80} 
          alt="" />
          <span>HTML</span>
        </div>

        <div ref={TWC} className={clsx(" xl:px-0 opacity-0 flex flex-col px-2 pb-3")}>
        { active ? TWC.current.classList.add([styles.fade], [styles.transformation], [styles.cinq]) : null  }
          <Image 
          src={twc}
          width={80} 
          height={80} 
          alt="" />
          <span>Tailwind</span>
        </div>

        <div ref={FSTY} className={clsx(" xl:px-0 opacity-0 flex flex-col px-2 pb-3")}>
        { active ? FSTY.current.classList.add([styles.fade], [styles.transformation],[styles.six]) : null  }
          <Image 
          src={fsty}
          width={80} 
          height={80} 
          alt="" />
          <span>Fastify & Express</span>
        </div>

        <div ref={GIT} className={clsx(" xl:px-0 opacity-0 flex flex-col px-2 pb-3")}>
        { active ? GIT.current.classList.add([styles.fade], [styles.transformation],[styles.six]) : null  }
          <Image 
          src={git}
          width={80} 
          height={80} 
          alt="" />
          <span>GIT</span>
        </div>




        
        </div>
        
        </>
    )
   
}

