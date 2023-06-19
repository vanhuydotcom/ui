import { Col, Row } from "@/container/global/styled.css";
import MasterLayout from "@/container/global/MasterLayout";
import DatePicker from "@/components/DatePicker";
export default function DatePickerPage() {
  return (
    <MasterLayout>
      <Row>
        <Col>
          <h2>Date Picker</h2>
          <DatePicker />
        </Col>
      </Row>
    </MasterLayout>
  );
}
