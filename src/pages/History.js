import React from 'react'

function History() {
    return(
    <>
    <h2 className="text-2xl font-bold">Historie</h2>
    
    <ol className='flex flex-wrap p-0 mb-4 list-none '>
        <li className='pr-2'><a href="/">Home</a></li>
        <li className='pr-2'> | </li>
        <li>History</li>
    </ol>
    
    
    <div className='flex flex-col pt-3 pl-10 pr-5'>
        
        <h3>Vznik a složení</h3>
        <p className='text-justify pt-4 pb-10'>
                Bytové družstvo Porubská 552 vzniklo v roce 1997, kdy se odprodávaly domy ve vlastnictví města.
                Naše družstvo je složeno z nájemníků tří vchodů, původně číslovaných 552, 553 a 554,  
                s původním názvem Porubská 552 a 553. Později bylo přejmenováno na Porubská 552, kdy došlo i k 
                přečíslování na jednotné číslo popisné 552. 
                Jednotlivé vchody jsou rozlišeny číslem orientačním  a to 552/24, 552/26 a 552/28.
        </p>
        
        <h3 className=''>Definice  a činnost družstva</h3>
        <p ><em><strong>Výpis ze stanov družstva</strong></em></p>
        <p className='text-justify pt-4'>Družstvo je společenstvím neuzavřeného počtu osob, které je založeno za účelem zajišťování bytových potřeb svých členů. Družstvo je bytovým družstvem.</p>
        <p className='text-justify pt-4'>Předmětem činnosti družstva je činnost zaměřená zejména na zajišťování potřeb členů družstva a spočívá v:</p>
        <ol type="a">
            <li>přidělování bytů svým členům a uzavírání příslušných smluv,</li>
            <li>pronajímání bytů  a nebytových prostor nájemcům – osobám, které nejsou členy družstva, a uzavírání příslušných smluv,</li><li>zajišťování služeb spojených s užíváním bytů a nebytových prostor a v uzavírání příslušných smluv na jejich dodávky,</li>
            <li>zajišťování správy majetku družstva, údržby, oprav, rekonstrukce a modernizace budov, bytů a nebytových prostor.</li>
        </ol>
        <p className='text-justify pt-4'>Družstvo ve své činnosti se zabývá především správou a využitím svého majetku, tj. domů, bytů a nebytových prostor.</p>
        <p className='text-justify pt-4'>Byty jsou pronajímány svým členům, kteří se finančně podíleli na odkupu svých bytů a jsou držiteli členského podílu. Právo nájmu bytu mají zaručeno stanovami družstva. Družstvo je majitelem nebytových prostor určených ke komerčnímu využití. Správa družstva zajišťuje stavební údržbu domů a podle pokynů představenstva družstva zajišťuje investiční akce, modernizace a generální opravy jednotlivých částí domů a to jak stavební, tak technologické části. Družstvo zajišťuje i služby spojené s bydlením a užíváním nebytových prostor jako je dodávka tepla, vody, osvětlení, provoz výtahů, bezpečnost, úklid, umožnění příjmu signálu TV, R a dat, desinfekce a deratizace, pojištění, požární ochrana, revize apod.</p>
        <p className='text-justify pt-4 pb-10' >Členové družstva se při užívání svých bytů řídí stanovami družstva, domovním řádem, požárními směrnicemi a dalšími směrnicemi a řídícími akty, jenž vydávají orgány družstva, a které schvaluje členská schůze, která je také nejvyšším orgánem družstva. Členská schůze se koná min. 1x do roka, představenstvo družstva je 3-členné, práci představenstva družstva řídí předseda družstva. Kontrolní komise družstva je 3-členná, práci kontrolní komise řídí předseda kontrolní komise. Představenstvo a kontrolní komise se schází 1x měsíčně. Při své práci se orgány i funkcionáři řídí stanovami družstva, kde jsou vymezeny kompetence. Funkcionáři družstva jsou do orgánů družstva voleni na 5-leté funkční období, do orgánů družstva může být zvolen každý člen družstva i opakovaně.</p>
    </div>
</>
    )
}

export default History