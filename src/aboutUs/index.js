import React from 'react';


export default function AboutUs() {
    return (
        <body>
            <main>
                <div id="aboutUs">

                    <section class="AboutSection">Developing You is a guided behavioral modification app that helps make the journey of achieving your personal goals more attainable. Created with evidence-based approaches such as S.M.A.R.T. (Specific Measurable Attainable Relevant and Timely) and positive reinforcement, this app is designed to make the process of reaching your goals more easily attainable and feel more rewarding!</section>

                    <img alt="chase" src={require('../../public/assets/ChasePic.jpg')} />
                    <p class="ChaseWords">I am a laid back individual with an unappeasable wanderlust. I love mountains and large bodies of water, as well as music in the park and dancing in the rain. I grew up in a small town in northern Wisconsin where my parents own a bar and motel. Software development, I believe, is a great opportunity to be a part of an innovative and prosperous future.</p>

                    <img alt="marie" src={require('../../public/assets/MariePic.jpg')} />
                    <p class="MarieWords">Hello, my name is Marie Antons. I am a software developer with a background as a Chef and server in the hospitality industry. The hospitality industry is all about working in teams, which has helped me develop my interpersonal and organizational skills. I love constant learning and being able to contribute to a team that is making a positive impact.</p>

                    <img alt="stacey" src={require('../../public/assets/StaceyPic.jpg')} />
                    <p class="StaceyWords">Greetings! My name is Stacey Teltser and I'm a Software Developer. I am a native of DC and moved to Iowa to pursue my BS at Coe. After graduating I worked as a Sign Language Interpreter for several years, where I was exposed to programming. That led me to learn basic Javascript and Python during my free time. It wasn't long after that I enrolled in DeltaV! I have enjoyed developing new skills, engaging in continuous problem solving, and learning new technologies. I look forward to collaborating with others to create and maintain software that positively impacts the lives of others.</p>

                    <img alt="francesco" src={require('../../public/assets/FrancescoPic.jpg')} />
                    <p class="FrancescoWords">
                        Hello, my name is Francesco Troiano, I am a software developer with previous experience in the customer service industry. In previous jobs I had found my passion, which was for people. I enjoyed working with them, helping them develop, and watching them grow drove me to furthering my own self. In my drive to become a full stack developer I found that I could take my passion and apply it towards the wonderful world of coding, and I'm excited to do so at future opportunities.
                     </p>


                </div>
            </main>
        </body>
    );
}