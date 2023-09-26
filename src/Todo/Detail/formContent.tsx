import React, { useEffect } from "react";
import { Form, Input, Select } from "antd";
import { SexDataSource } from "../../constants";

type FieldType = {
  name?: string;
  age?: string;
  sex?: string;
};

interface IInfoForm {
  form: any;
  dataSource: any[];
  setDataSource: any;
  records?:any,
  title:string;
}

export default function InfoForm(props: IInfoForm) {

  console.log('props',props.records)

  useEffect(()=>{
    if(props.title === 'edit'){
      props.form.setFieldsValue(props.records)
    }
  },[])

  const onFinish = (values: any) => {
    props.setDataSource([...props.dataSource,values])
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={props.form}
      name="basic"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 21 }}
      style={{ maxWidth: 500 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="姓名"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="年龄"
        name="age"
        rules={[{ required: true, message: "Please input your age!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="性别"
        name="sex"
        rules={[{ required: true, message: "Please input your sex!" }]}
      >
        <Select>
          {SexDataSource.map((item, index) => {
            return (
              <Select.Option value={item.value} key={index}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
}
