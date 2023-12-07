import Head from "next/head";
import styles from "@/styles/Home.module.scss";



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="h-[1080px] ">
          
          <div className="h-[60px] bg-[#F5F5F5] rounded-[20px] flex mt-[-20px]">
            <div className="h-[60px] w-1/3 mr-auto flex">
              <div className=" w-[184.26px] my-auto rew h-[16px] ml-[20px]"></div>
            </div>
            <div className="h-[60px] w-1/3 mx-auto flex">
              <div className="h-[30px] my-auto mx-auto text-base text-center">
                <a href="#1" className="">О нас</a>
                <a href="#2" className="ml-10">Школьникам</a>
                <a href="#3" className="ml-10">Студентам</a>
                <a href="#4" className="ml-10">Партнерам</a>
              </div>
              
            </div>
            <div className="h-[60px] w-1/3 ml-auto flex">
              <form action="/dashboard/auth" className="ml-auto my-auto mr-[20px]">
                <button className="h-[39px] w-[150px] rounded-[22px] border-2 border-black text-lg mr-[20px]">Регистрация</button>
                <button className="h-[39px] w-[90px] rounded-[22px] border-2 border-black bg-black text-white text-lg">Войти</button>
              </form>

            </div>
          </div>

          <div className="flex h-1/2">
            <div className="w-5/12 h-full"></div>
            <div className="w-7/12 h-full flex">
              <div className="text-7xl font-semibold h-1/2 my-auto w-1/2">Стань частью нового поколения ИТ-сообщества страны</div>
            </div>
          </div>
          <div className="flex h-1/2"></div>

        </div>
        <div className="h-[1080px]" id="1">
          <div className=" text-7xl w-10/12">Мы нацелены на предоставление молодым талантам путь 
          в сферу IT и цифровой индустрии, а также на поддержку опытных профессионалов в 
          их карьерном росте или переориентации</div>
          <div className="mt-10 text-2xl ">Мы создаем уникальные программы, курсы и проекты.
          Даем возможность обучаться новым навыкам увлекательным методом. </div>
        </div>




        <div className="h-[1080px]" id="2">
          <div className=" text-7xl w-11/12">Погружайся в IT и digital-индустрию вместе с MPIT education</div>
          <div className="mt-10 text-5xl font-semibold">Наши курсы/проекты</div>
          <div className="h-1/2 flex mt-16">
            <div className="w-1/2 h-full">
              <div className="w-[98%] h-full mr-auto rounded-[22px] bg-[#F9E35D]"></div>
            </div>
            <div className="w-1/2 h-full">
              <div className="w-[98%] h-full ml-auto rounded-[22px] bg-[#B328F6]"></div>
            </div>

          </div>
        </div>


        <div className="h-[1080px]" id="3">
          <div className="text-7xl w-11/12">До окончания университета у вас есть возможность бесплатно 
          приобрести практические навыки и актуальные знания</div>
          <div className="mt-10 text-5xl font-semibold">Подходящие для вас проекты</div>
          <div className="h-1/2 flex mt-16">
            <div className="w-1/2 h-full">
              <div className="w-[98%] h-full mr-auto rounded-[22px] bg-[#F578C5]"></div>
            </div>
            <div className="w-1/2 h-full">
              <div className="w-[98%] h-full ml-auto rounded-[22px] bg-[#86F37D]"></div>
            </div>

          </div>
        </div>




        <div className="h-[1080px]" id="4">
          <div className="text-7xl w-3/5">Привлекайте в свои проекты активную молодежь</div>
          <div className="flex h-1/2">
            <div className="w-5/12 h-full"></div>
            <div className="w-7/12 h-full flex">
              <div className="text-7xl font-semibold h-3/4 my-auto w-2/3">Создавайте увлекательные задания и проекты, связанные с IT и digital</div>
              <div className="h-1/2 my-auto w-1/3 flex">
                <form action="/dashboard/auth" className=" h-full flex">
                 <button className="h-[44px] w-[131px] rounded-[22px] border-2 border-black  text-black text-xl mt-auto">Начать</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        

      </main>
      <div className="h-[250px] bg-[#F5F5F5]">
        <div className="h-10"></div>
        <div className=" w-[184.26px] rew h-[16px] mx-auto"></div>
        <div className="h-10"></div>
        <div className="h-[30px]  mx-auto text-base text-center">
          <a href="#1" className="">О нас</a>
          <a href="#2" className="ml-10">Школьникам</a>
          <a href="#3" className="ml-10">Студентам</a>
          <a href="#4" className="ml-10">Партнерам</a>
        </div>
        <div className="h-10"></div>
        <p className="text-xl  text-center">2023</p>
      </div>

    </>
  );
}
