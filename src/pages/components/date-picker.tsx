import { Col, Row } from "@/container/global/styled.css";
import MasterLayout from "@/container/global/MasterLayout";
import { useState } from "react";
import { ECalendarStyle, ECalendarType } from "@/components/Calendar/types";
import { DatePicker, RangePicker } from "@/components/DatePicker";

const initDates = [new Date("06/21/2023"), new Date("06/30/2023")];
export default function DatePickerPage() {
  const [date, setDate] = useState<Date | null>(new Date("06/21/2023"));
  const [dates, setDates] = useState<Date[] | null>(initDates);

  return (
    <MasterLayout>
      <Row>
        <Col>
          <Row>
            <Col>
              <h2>Date Picker</h2>
              <Row>
                <Col>
                  <h3>Date</h3>
                  <DatePicker
                    defaultDate={date}
                    onChange={(date) => setDate(date)}
                  />
                </Col>
                <Col>
                  <h3>Month</h3>
                  <DatePicker
                    type={ECalendarType.month}
                    defaultDate={date}
                    onChange={(date) => setDate(date)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Range Picker</h2>
              <h3>Single panel</h3>
              <Row>
                <Col>
                  <RangePicker
                    pickerType={ECalendarStyle.range}
                    defaultDates={initDates}
                    onChange={(dates) => setDates(dates)}
                  />
                </Col>
                <Col>
                  <RangePicker
                    type={ECalendarType.month}
                    pickerType={ECalendarStyle.range}
                    defaultDates={initDates}
                    onChange={(dates) => setDates(dates)}
                  />
                </Col>
              </Row>
              <h3>Range panel</h3>
              <Row>
                <Col>
                  <RangePicker
                    pickerType={ECalendarStyle.range}
                    calendarStyle={ECalendarStyle.range}
                    defaultDates={initDates}
                    onChange={(dates) => setDates(dates)}
                  />
                </Col>
                <Col>
                  <RangePicker
                    type={ECalendarType.month}
                    pickerType={ECalendarStyle.range}
                    calendarStyle={ECalendarStyle.range}
                    defaultDates={initDates}
                    onChange={(dates) => setDates(dates)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </MasterLayout>
  );
}
