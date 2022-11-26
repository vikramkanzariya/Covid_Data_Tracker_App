    import React , {useEffect , useState   } from 'react'
    import './Covid.css';

    const Covid = () => {
      const [data , setData ] = useState([]);

        const getCovidData = async () => {
          try {                   // ---> Execute Command or Give the Error
            const res = await fetch ('https://data.covid19india.org/data.json');
            // console.log(res);
            const actualData =  await res.json();   // ---> Returns Promises  
            console.log(actualData.statewise[0]);   // ---> Can see Data in Console of Inspect page

            setData(actualData.statewise[0]);  // ---> can see Data on Web page
            

          } catch (err) {
            console.log(err);
          }

        }


        useEffect(() => {
            getCovidData();
        }, [])
        

        return ( 
            <>
            <section>
              <h1>🔴LIVE🔴</h1>
              <h2>Covid-19 Tracker</h2>

              <ul>

                <li className='card'> 
                    <div className='card__main'>
                        <div className='card__inner'>
                          <p className='card__name'> <span>OUR</span> COUNTRY </p>
                          <p className='card__total card__small '> INDIA </p>
                        </div>
                    </div>
                </li>


                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                          <p className='card__name'> <span>TOTAL</span> RECOVERED </p>
                          <p className='card__total card__small '> {data.recovered} </p>
                        </div>
                    </div>
                </li>


                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                          <p className='card__name'> <span>TOTAL</span> CONFIRMED</p>
                          <p className='card__total card__small '> {data.confirmed} </p>

                        </div>
                    </div>
                </li>



                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                          <p className='card__name'> <span>TOTAL</span> DEATHS </p>
                          <p className='card__total card__small '> {data.deaths} </p>
                        </div>
                    </div>
                </li>



                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                          <p className='card__name'> <span>TOTAL</span> ACTIVE </p>
                          <p className='card__total card__small '> {data.active} </p>
                        </div>
                    </div>
                </li>



                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                          <p className='card__name'> <span>LAST</span> UPDATED </p>
                          <p className='card__total card__small '> {data.lastupdatedtime} </p>
                        </div>
                    </div>
                </li>




              </ul>
              </section>



            </>
        )
    }

    export default Covid