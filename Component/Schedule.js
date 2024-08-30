import style from "@/styles/schedule.module.css";

export default function Schedule() {
    return (
        <div className={style.calendar}>
            <div className={style.timeline}>
                <div className={style.spacer}></div>
                {/* <div className={style.timeMarker}>8 AM</div> */}
                <div className={style.timeMarker}>9 AM</div>
                <div className={style.timeMarker}>10 AM</div>
                <div className={style.timeMarker}>11 AM</div>
                <div className={style.timeMarker}>12 PM</div>
                <div className={style.timeMarker}>1 PM</div>
                <div className={style.timeMarker}>2 PM</div>
                <div className={style.timeMarker}>3 PM</div>
                <div className={style.timeMarker}>4 PM</div>
                <div className={style.timeMarker}>5 PM</div>
                <div className={style.timeMarker}>6 PM</div>
                {/* <div className={style.timeMarker}>7 PM</div>
                <div className={style.timeMarker}>8 PM</div> */}

            </div>
            <div className={style.days}>
                <div className={`${style.day} ${style.mon}`}>
                    <div className={style.date}>
                        {/* <p className={style.dateNum}>9</p> */}
                        <p className={style.dateDay}>Sun</p>
                    </div>
                    <div className={style.events}>
                        <div className={`${style.event} ${style.start2} ${style.end5} ${style.securities}`}>
                            <p className={style.title}>Securities Regulation</p>
                            <p className={style.time}>2 PM - 5 PM</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.day} ${style.tues}`}>
                    <div className={style.date}>
                        {/* <p className={style.dateNum}>12</p> */}
                        <p className={style.dateDay}>Mon</p>
                    </div>
                    <div className={style.events}>
                        <div className={`${style.event} ${style.start10} ${style.end12} ${style.corpFi}`}>
                            <p className={style.title}>Corporate Finance</p>
                            <p className={style.time}>10 AM - 12 PM</p>
                        </div>
                        <div className={`${style.event} ${style.start1} ${style.end4} ${style.entLaw}`}>
                            <p className={style.title}>Entertainment Law</p>
                            <p className={style.time}>1PM - 4PM</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.day} ${style.wed}`}>
                    <div className={style.date}>
                        {/* <p className={style.dateNum}>11</p> */}
                        <p className={style.dateDay}>Tues</p>
                    </div>
                    <div className={style.events}>
                        <div className={`${style.event} ${style.start12} ${style.end1} ${style.writing}`}>
                            <p className={style.title}>Writing Seminar</p>
                            <p className={style.time}>11 AM - 12 PM</p>
                        </div>
                        <div className={`${style.event} ${style.start2} ${style.end5} ${style.securities}`}>
                            <p className={style.title}>Securities Regulation</p>
                            <p className={style.time}>2 PM - 5 PM</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.day} ${style.thurs}`}>
                    <div className={style.date}>
                        {/* <p className={style.dateNum}>12</p> */}
                        <p className={style.dateDay}>Wed</p>
                    </div>
                    <div className={style.events}>
                        <div className={`${style.event} ${style.start10} ${style.end12} ${style.corpFi}`}>
                            <p className={style.title}>Corporate Finance</p>
                            <p className={style.time}>10 AM - 12 PM</p>
                        </div>
                        <div className={`${style.event} ${style.start1} ${style.end4} ${style.entLaw}`}>
                            <p className={style.title}>Entertainment Law</p>
                            <p className={style.time}>1PM - 4PM</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.day} ${style.fri}`}>
                    <div className={style.date}>
                        {/* <p className={style.dateNum}>13</p> */}
                        <p className={style.dateDay}>Thurs</p>
                    </div>
                    
                    <div className={style.events}></div>
                </div>
            </div>
        </div>
    );
}
