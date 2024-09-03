import ScrollFunction from './Assets/scrollFunction.js';
import ScrollTop from './Assets/ScrollTop.js';
import React, { useRef, useEffect } from 'react';
import '../App.css';
import imgDashboardFooder from '../Assets/fooder/fooder-dashboard-buisness.png';
import imgHomeGameCreator from '../Assets/gamecreator/home-gamecreator.png';
import imgProjectsLaravelAuth from '../Assets/laravel-auth/Projects.png';
import imgMainPageProjectChess from '../Assets/chessacademy/mainpage.png';
import { useScroll } from './Assets/ScrollDisable.js';



function MainContent() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    const handleClick = (sectionRef) => {
        ScrollFunction(sectionRef);
    };
    const { setScrollDisabled } = useScroll();

    useEffect(() => {
        setScrollDisabled(true);

        return () => {
            setScrollDisabled(false);
        };
    }, [setScrollDisabled]);
    return (

        <div className="flex justify-center flex-col">
            {/*introduzione*/}
            <div className="background-gif min-h-[calc(100vh-56px)] container mx-auto relative flex flex-col items-center justify-center  lg:pt-0 ">
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleClick(section1Ref)} className="button-hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white">
                        &#129123;
                    </button>
                </div>
                <div>
                    <div className="hover:text-yellow-500 mt-10 flex flex-col justify-center items-center">
                        <p className="md:text-3xl text-center">29 Agosto 2024</p>
                        <p className="md:text-4xl text-center">Oggi compi ben 23 anni, ormai sei vecchia!!</p>
                        <p className="text-2xl group transition flex text-center">Tantissimi auguri di buon compleanno Marti<span className='h-8 w-2  rounded-2xl px-6 flex justify-center duration-500 animate-pulse'>❤</span></p>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-20 md:pb-20">
                        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Cute animated illustration"/>
                </div>


            </div>

            {/* anteprima primo progetto fooder*/}
            <div ref={section1Ref} className="container min-h-screen d:min-h-0 mx-auto relative flex  items-center justify-center lg:pt-20 lg:pt-0">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <button onClick={ScrollTop} className='button-hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                        &#129121;
                    </button>
                </div>

                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleClick(section2Ref)} className='button-hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                        &#129123;
                    </button>
                </div>

                <div className='flex flex-col items-center lg:flex-row flex-grow'>
                    <div className=' w-full lg:w-4/6 flex flex-col px-5'>
                        <p className='text-md py-5 text-pretty'>Parto col dire che questo non era il design finale del sito, dopo quello che è successo quando sono sceso in Egitto ho deciso di
                            renderlo più semplice in modo da finirlo prima.
                            <br></br>
                            Questo sito è il motivo per cui ho avuto da fare prima di partire, è il motivo per cui ho ripetuto diverse volte di essere impegnato, è il motivo di essere staato presente
                            poco quando io ti avevo promesso il contario.
                            <br></br>
                            - Non potevo dirti il vero motivo e quindi ho usato la scusa del sito personale.
                            <br></br>
                            - Dovevo fare il più possibile prima di partire perchè avrei avuto solo il MAC dietro, non lo so usare molto bene e di conseguenza mi sarei messo 1000 ore in più.
                        </p>
                    </div>
                    <div className='w-11/12 lg:w-2/6'>
                        <img src={imgDashboardFooder} className="max-w-full" alt='imgDashboard' />
                    </div>
                </div>
            </div>

            {/* anteprima primo progetto gamecreator*/}
            <div ref={section2Ref} className="container min-h-screen mx-auto relative flex  items-center justify-center pt-20 lg:pt-0">
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleClick(section1Ref)} className='button-hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                        &#129121;
                    </button>
                </div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleClick(section3Ref)} className='button-hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                        &#129123;
                    </button>
                </div>
                <div className="flex flex-col  items-center lg:flex-row">
                    <div className=" w-full lg:w-2/6 flex flex-col px-5">
                        <p className='text-4xl md:text-7xl break-all text-pretty'>GameCreator</p>
                        <p className='text-md py-5 text-pretty'>GameCreator è una web app per la creazione di personaggi stile Dungeons & Dragons, sviluppata in team presso <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>. Utilizza Laravel per la creazione del backend. Questo progetto dimostra le competenze nel backend acquisite durante il corso, inclusa l'autenticazione degli utenti e la gestione dei dati di del personaggio creato o già esistente.</p>
                    </div>
                    <div className="w-11/12 lg:w-4/6">
                        <img src={imgHomeGameCreator} className="max-w-full" alt='imgDashboard' />
                    </div>
                </div>
            </div>

            {/* anteprima primo progetto Laravel-auth*/}
            <div ref={section3Ref} className="container min-h-screen mx-auto relative flex items-center justify-center  pt-20 lg:pt-0">

                <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleClick(section2Ref)} className='button-hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                        &#129121;
                    </button>
                </div>

                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleClick(section4Ref)} className='button-hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                        &#129123;
                    </button>
                </div>

                <div className="flex flex-col items-center lg:flex-row">
                    <div className="w-full lg:w-2/6 flex flex-col px-5">
                        <p className="text-4xl md:text-7xl break-all text-pretty">Laravel-auth</p>
                        <p className="text-md py-5 text-pretty">Laravel-Auth è una web app per la pubblicazione dei progetti di ogni tipo e il salvataggio nel database per poi essere riportati in un progetto Front-end(non ancora sviluppato), sviluppata interamente in solitario presso <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>. Utilizza Laravel per il backend e include un sistema di autenticazione degli utenti sviluppato autonomamente. Questo progetto evidenzia le competenze nel backend development acquisite durante il corso.</p>
                    </div>

                    <div className="w-11/12 lg:w-4/6">
                        <img src={imgProjectsLaravelAuth} className="max-w-full" alt="imgDashboard" />
                    </div>
                </div>
            </div>

            {/* anteprima primo progetto Chess Academy*/}

            <div ref={section4Ref} className="container min-h-screen mx-auto relative flex items-center justify-center  pt-20 lg:pt-0">
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleClick(section3Ref)} className="button-hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white">
                        &#129121;
                    </button>
                </div>

                <div className="flex flex-col items-center lg:flex-row">
                    <div className="w-full lg:w-2/6 flex flex-col px-5">
                        <p className="text-4xl md:text-7xl break-all text-pretty">Chess Academy</p>
                        <p className="text-md py-5 text-pretty">Chess Academy è stato il progetto midterm presso <a href="https://boolean.careers/" className='hover:text-blue-500 underline visited:text-purple-600'>Boolean</a>, sviluppato interamente con Vue.js. Questa web app sfrutta le potenzialità di Vue.js per garantire un"esperienza utente fluida e reattiva. Il progetto dimostra le competenze acquisite nel front-end durante il corso.</p>
                    </div>
                    <div className="w-11/12 lg:w-4/6">
                        <img src={imgMainPageProjectChess} className="max-w-full" alt="imgDashboard" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MainContent;