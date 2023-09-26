import { Form, Modal } from "antd";
import React from "react";
import InfoForm from "./formContent";

export default function InfoModal(props: {
  visible: boolean;
  setVisible: any;
  title: string;
  dataSource:any[]
  setDataSource:any,
  records:any
}) {
  const [form] = Form.useForm();

  return (
    <Modal
      open={props.visible}
      title={props.title ==='create' ?'创建用户':'修改用户信息'}
      onOk={() => {
        form.submit();
        props.setVisible(false);
      }}
      onCancel={() => {
        props.setVisible(false);
      }}
    >
      <InfoForm 
        form={form} 
        dataSource={props.dataSource} 
        setDataSource={props.setDataSource}
        records={props.records}
        title={props.title}
      />
    </Modal>
  );
}
