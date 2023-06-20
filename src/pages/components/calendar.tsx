import { useState } from "react";
import MasterLayout from "@/container/global/MasterLayout";
import { Input } from "@/components/Input/styles.css";
import { ECalendarStyle, ECalendarType } from "@/components/Calendar/types";
import { Row, Col } from "@/container/global/styled.css";
import Calendar from "@/components/Calendar";

const initDate = new Date();
const initStartDate = new Date();
const initEndDate = new Date(2023, 6, 20);

export default function CalendarPage() {
  const [date, setDate] = useState<Date | null>(initDate);

  const [dates, setDates] = useState<Date[] | null>([
    initStartDate,
    initEndDate,
  ]);

  return (
    <MasterLayout>
      <Row>
        <Col>
          <Row>
            <Col>
              <h2>Basic calender</h2>
              <Row>
                <Col>
                  <Input
                    type="text"
                    defaultValue={date?.toLocaleDateString("vi")}
                  />
                  <Calendar
                    // initDates={date && [date]}
                    handleDateClick={(dates) => dates && setDate(dates[0])}
                    max={new Date("2024/06/20")}
                    min={new Date("2022/06/20")}
                  />
                </Col>
                <Col>
                  <Input
                    type="text"
                    defaultValue={date?.toLocaleDateString("vi")}
                  />
                  <Calendar
                    type={ECalendarType.month}
                    initDates={date && [date]}
                    handleDateClick={(dates) => dates && setDate(dates[0])}
                    max={new Date("2024/06/20")}
                    min={new Date("2022/06/20")}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Range Calendar</h2>
              <Row>
                <Col>
                  <h3>single calendar</h3>
                  <Row>
                    <Col>
                      <div style={{ display: "flex", gap: 16 }}>
                        <Input
                          type="text"
                          defaultValue={
                            (dates && dates[0]?.toLocaleDateString("vi")) ?? ""
                          }
                        />
                        <Input
                          type="text"
                          defaultValue={
                            (dates && dates[1]?.toLocaleDateString("vi")) ?? ""
                          }
                        />
                      </div>
                      <Calendar
                        pickerType={ECalendarStyle.range}
                        initDates={dates}
                        handleDateClick={(dates) => {
                          console.log(dates);
                          setDates(dates);
                        }}
                        max={new Date("2024/06/20")}
                        min={new Date("2022/06/20")}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <h3>range calendar</h3>
                  <Row>
                    <Col>
                      <div style={{ display: "flex", gap: 16 }}>
                        <Input
                          type="text"
                          defaultValue={
                            (dates && dates[0]?.toLocaleDateString("vi")) ?? ""
                          }
                        />
                        <Input
                          type="text"
                          defaultValue={
                            (dates && dates[1]?.toLocaleDateString("vi")) ?? ""
                          }
                        />
                      </div>
                      <Calendar
                        initDates={dates}
                        pickerType={ECalendarStyle.range}
                        calendarStyle={ECalendarStyle.range}
                        handleDateClick={(dates) => {
                          console.log(dates);
                          setDates(dates);
                        }}
                        max={new Date("2024/06/20")}
                        min={new Date("2022/06/20")}
                      />
                    </Col>{" "}
                    <Col>
                      <div style={{ display: "flex", gap: 16 }}>
                        <Input
                          type="text"
                          defaultValue={
                            (dates && dates[0]?.toLocaleDateString("vi")) ?? ""
                          }
                        />
                        <Input
                          type="text"
                          defaultValue={
                            (dates && dates[1]?.toLocaleDateString("vi")) ?? ""
                          }
                        />
                      </div>
                      <Calendar
                        initDates={dates}
                        type={ECalendarType.month}
                        pickerType={ECalendarStyle.range}
                        calendarStyle={ECalendarStyle.range}
                        handleDateClick={(dates) => {
                          console.log(dates);
                          setDates(dates);
                        }}
                        max={new Date("2024/06/20")}
                        min={new Date("2022/06/20")}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </MasterLayout>
  );
}
