import React from 'react'

const UnluckyContents = () => {
    const Engtext1 = "That's unlucky :("
    const Arbtext1 = "عامة انا أسف انى ضيعت وقتك. و أسف انى كنت ب-stalk الاكونت بتاعك."
    const Arbtext2 = "كنت بس بحاول اعرف عنك اكتر. ربنا معاكى و يسعدك. و انشاءالله تبقى"
    const Arbtext3 = "اشطر دكتورة ف الدنيا."
    const Arbtext4 = "فرصة سعيدة."

    return (
        <>
            <div className='absolute text-primary w-full h-full'>
                <div className='flex flex-col h-full justify-center text-center text-xl lg:text-3xl font-serif font-bold leading-tight '>
                    <div className='w-fit self-center bg-neutral-800 shadow-2xl shadow-black rounded-2xl border-primary-focus border-2 p-2'>
                        <h1>
                            {Engtext1}
                        </h1>
                        <h1 dir="rtl">
                            {Arbtext1}
                        </h1>
                        <h1 dir="rtl">
                            {Arbtext2}
                        </h1>
                        <h1 dir="rtl">
                            {Arbtext3} 👩‍⚕️
                        </h1>
                        <h1 dir="rtl">
                            {Arbtext4} 🥰👋
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UnluckyContents;