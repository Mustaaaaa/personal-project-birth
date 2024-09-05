import ScrollFunction from './Assets/scrollFunction.js';
import ScrollTop from './Assets/ScrollTop.js';
import React, { useRef, useEffect } from 'react';
import '../App.css';

import { useScroll } from './Assets/ScrollDisable.js';



function MainContent() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

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
            <div className="background-gif min-h-[calc(100vh-56px)] container mx-auto relative flex flex-col items-center justify-center  lg:pt-0 ">
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleClick(section1Ref)} className="button-hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white">
                        &#129123;
                    </button>
                </div>
                <div>
                    <div className="hover:text-yellow-500 mt-10 flex flex-col justify-center items-center">
                        <p className="text-4xl group transition flex text-center">Tantissimi auguri di buon compleanno Marti<span className='h-8 w-2  rounded-2xl px-6 flex justify-center duration-500 animate-pulse'>❤</span></p>
                        <p className="text-2xl text-center">29 Agosto 2024</p>
                        <p className="text-2xl text-center">Oggi compi ben 23 anni, ormai sei vecchia!!</p>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-20 md:pb-20">
                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Cute animated illustration" />
                </div>


            </div>

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

                <div className='flex flex-col items-center flex-grow'>
                    <div className=''>
                        <ul className='text-md py-5 text-pretty list-disc'>
                            <li className='pb-5'>
                                Parto col dire che questo non era il design finale del sito, inizialmente aveva molte più sezioni con animazioni migliori, era più organizzato e sarebbbe stato più ricco di
                                testo e di foto rispetto a questo ma dopo quello che è successo quando sono sceso in Egitto ho deciso di renderlo il più semplice possibile dato che lo lascerò attivo per
                                7 giorni e non più per sempre.
                            </li>
                            <li className='pb-5'>
                                L'obbiettivo della creazione di questo sito è quello darti qualcosa che potesse durare all'infinito senza mai degradare con il tempo, lo avrei migliorato sempre di più con
                                il tempo continuando ad aggiungere parti di testo e foto. Volevi una lettera o qualcosa di scritto su un pezzo di carta? Stavo lavorando su qualcosa di migliore.
                            </li>
                            <li className='pb-5'>
                                Questo sito è il motivo per cui ho avuto da fare prima di partire, è il motivo per cui ho ripetuto diverse volte di essere impegnato, è il motivo per cui sono stato presente
                                poco quando io ti avevo promesso il contario.
                            </li>
                            <li className='pb-5'>
                                Non potevo dirti il vero motivo e quindi ho usato la scusa del sito personale e dovevo fare il più possibile prima di partire perchè avrei avuto solo il Mac dietro,
                                non lo so usare molto bene e di conseguenza mi sarei messo 1000 ore in più.
                            </li>
                            <br className='p-10'></br>
                            <li className='pb-5'>
                                Nella prossima pagina troverai tutte le informazioni sui regali, aprili in ordine e solo dopo aver letto prima la parte dedicata ad ogni singolo regalo(occhio se hai qualcuno vicino che
                                nel testo del secondo regalo c'è una frase volgare).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div ref={section2Ref} className="container min-h-screen mx-auto relative flex  items-center justify-center pb-40 background-gif-gifts">
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleClick(section1Ref)} className='button-hidden border-2 bg-slate-900 border-slate-950 w-10 h-10 rounded-full text-2xl animate-bounce text-white'>
                        &#129121;
                    </button>
                </div>
                <div className='flex flex-col items-center flex-grow'>
                    <div className=''>
                        <ul className='text-md py-5 text-pretty list-decimal'>
                            <li className='pb-5'>
                                Come puoi vedere, il primo regalo è <strong>la borsa con la foto di Cleopatra</strong> , volevo farne una con su scritto Martina An Italian Clown ah no scusa era Queen, mi confondo sempre mannaggia a me, Martina An Italian Queen
                                ma come ho gia detto data la situazione ho deciso di regalarti una classica.
                            </li>
                            <li className='pb-5'>
                                Ora tocca al secondo regalo: il <strong>papiro</strong>. Una volta aperto troverai la tua raffigurazione mentre mi tieni le palle😂😂(la tua reazione: 1)
                                Dirai: che scemo 2)ti metterai a ridere o almeno farai un sorriso).
                                <ul className='list-disc pl-5'>
                                    <li>
                                        Ora puoi prendere il papiro ed aprirlo.
                                    </li>
                                    <li>
                                        Scherzi a parte il tipo in negozio mi ha detto che è Cleopatra, così sarete due regine in casa.
                                    </li>
                                </ul>

                            </li>
                            <li className='pb-5'>
                                <p>Come terzo regalo c'è uno <strong>specchietto</strong> sempre con il disegno di Cleopatra sopra, <span className='text-red-500 pl-3 flex justify-center duration-500 animate-pulse'> Warning!!</span></p>
                                <span className='uppercase'>LAVATI il viso PRIMA DI APRIRLO CHE è LA PRIMA VOLTA E NON è ANCORA ABITUATO alla tua faccia da culo E COSì EVITI ANCHE DI FARLO CADERE IN MILLE PEZZI.🤪</span>
                            </li>
                            <li className='pb-5'>
                                Ora tocca al quarto regalo: <strong>due bottigliette di vetro con la sabbia colorata all'interno</strong>, all'inizio ti avevo preso il cammello con su scritto il tuo nome ma tempo di arrivare in hotel e si era gia rotto(è molto sensibile,
                                il tipo mi aveva avvisato ma l'ho voluto prendere lo stesso), poi sono andato il giorno dopo per prenderne altri due sta volta uno senza scritte per
                                roby insieme alle scarpe e uno con il cuoricino per te, indovina un po? quello con il cuoricino si è mescolata la sabbia all'interno e ormai non c'è piu nessun disegno,
                                rimane solo quello di roby, vedi tu cosa vuoi fare.
                            </li>
                            <li className='pb-5'>
                                Come quinto regalo ti ho preso le <strong>McQueen</strong> con i cristalli bianchi (ovviamente non sono le originali, ma ho davvero preso la qualità migliore che c'è in Egitto) che brillano
                                come brilli te.
                                <br></br>
                                P.S. eri stupenda alla tua festa di compleanno, una vera e propria <strong>Regina</strong>.
                            </li>
                            <li className='pb-5'>
                                il sesto regalo che troverai nella bustina presente nella scatola delle McQueen, più che regalo è cultura sulla moneta Egiziana. Ti ho portato tutte le monete(scherzo manca solo la moneta da 1 sterlina che ho perso, è simile a quella da 2 euro)
                                presenti in Egitto: 50 cent(equaivalgono ad 1 sentesimo qui), 5 sterline(10 centesimi), 10 sterline (20 centesimi), 20 sterline (40 centesimi), 50 sterline (1 euro), 100 sterline (2 euro)
                                e infine quella da 200 sterline (4 euro).
                            </li>
                            <br className='p-10'></br>
                        </ul>
                        <p className='pb-5'>
                            Spero che i regali siano stati di tuo gradimento❤.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MainContent;