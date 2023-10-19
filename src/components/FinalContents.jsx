import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';


const FinalContents = () => {
    const [value, setValue] = useState("");

    useEffect(() => {
        return () => {
            if (history.action === 'POP') {
                history.go(1);
            }
        };
    }, [history]);


    const text = "طيب خلينا نتكلم جد شوية. انا شوفتك بالصدفة عالفيس و كنت معجب بيكى بس الحقيقة عمرى ما كنت هكلمك عشان انا متوحد جداا و مبحبش اكلم حد معرفوش (توو ماتش ديتيلز ماى دوود). بس بعد فترة فجاة كدا بالصدفة  الصفحة بتاعتك اتفتحت قدامى و هووب لقيت لينك  تويتر هووب قام اتفتح لوحده برضو بالصدفة و قعدت اقرا التويتس بتاعتك. و طول ما انا بقرا التويتس دماغى بتقولى انك حد عاقل جداا و اننا شبه بعض اوى و انك تستاهلى انى اطلع من الكومفرت زوون بتاعتى و اكلمك. ف عشان كدا عملت الويبسايت التعبان اللى انتى شايفاه دا عشان اقولك الكلمتين دول.  و الصراحة ه- appreciate it جداا لو قررتى تدى الموضوع فرصة و نتعرف على بعض اكتر. و  برضو لو مش حابة ف نوو هارد فيلينجز خالص بجد.  اتمنى اصلا تكونى وصلتى للكلام دا و مطلعتيش مرتبطة من تانى سوال و الويبسايت قفل.";
    const text2 = "و btw للتوضيح يعنى انا كنت بقولك ف اول سوال keep it secret for now عشان انتى طلعتيلى ف ال people u may know عشان بيننا mutual friend اللى هو سامى. و بعد ما قلبت شوية عندك (انا اسف بجد انى كنت ب- stalk عليكى بس كنت حابب اعرف عنك اكتر قبل ما ابعتلك) اكتشفت انه قريبك (مش متاكد يقربلك ايه بس شكله ابن خالتك بس هو مش عند باباكى عالفيس ف مش متاكد اوى يعنى) و سامى بالنسبالى زى اخويا الصغير ف حابب ان انا اللى اعرفه يعنى موضوع زى كدا عشان ميتضايقش. بس طبعا كان لازم اعرف رايك الاول. انا بس بقولك كل القصص دى عشان  متفتكريش انى عايز ن- date من ورا اهلك انا عمرى ما هحب حاجة زى كدا بالعكس هبقى حابب انهم يكونوا عارفين كل حاجة دايما. و انا كدا كدا عارف انك مش هتعملى حاجة من وراهم اصلا بس حبيت اوضحلك يعنى الدنيا."
    const text3 = "و بس كدا كفاية رغى. لو حابة اننا نتكلم تانى (highly recommended) ف ممكن تكتبيلى اى حاجة هنا تحت و تبعتيها. او برضو ممكن من الفيس او تويتر as you like يعنى."
    const text4 = "سايد نووت: بعد ما خلصت كل حاجة و رجعت قريت كل اللى انا كاتبه تانى حسيت انى اكتر انسان كرينج ف العالم 😂."

    return (
        <>
            <div className='text-primary text-2xl m-4 font-serif font-extrabold text-center w-fit self-center bg-neutral-800 shadow-2xl shadow-black rounded-2xl border-primary-focus border-2 p-2'>
                <h2 dir='rtl'>{text}</h2>
                <h2 dir='rtl'>{text2}</h2>
                <h2 dir='rtl'>{text3}</h2>
                <h2 dir='rtl'>{text4}</h2>
            </div>
            <div className='flex flex-col lg:flex-row items-center'>
                <textarea name='finalmsg' value={value} onChange={(e) => { setValue(e.target.value) }} id="textArea" className=" shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] textarea textarea-primary text-primary-content placeholder:opacity-50 placeholder:text-primary-content placeholder:text-lg m-12 mb-0 h-80 w-[80%]" placeholder="In case You are not sure what you are gonna be for halloween... You can be mine ( ;"></textarea>
                <button onClick={() => { finishHim(value) }} className='bg-secondary-content btn text-white w-40 m-8 hover:bg-secondary-content hover:opacity-80'>
                    Send
                </button>
            </div>
        </>
    );
}

const finishHim = (value) => {
    localStorage.setItem('FinalVisited', true)

    let templateParams = {
        name: localStorage.getItem('username'),
        message: value,
    };
    emailjs.send('service_o4g4imn', 'template_q4mzaa4', templateParams, 'u9SC81GOXSfFtUhpf')


}

export default FinalContents;