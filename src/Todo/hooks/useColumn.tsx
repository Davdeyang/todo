import { Button, Popconfirm, Tag, message } from "antd";
import React from "react";

export default function useColumn(props: {
  tableDataSource: any;
  setVisible: any;
  setTitle: any;
  setTableDataSource: any;
}) {

  const [records,setRecords] =React.useState()

  async function deleteInfo(index: number) {
    try {
      const newList = props.tableDataSource.filter(
        (item: any, i: number) => i !== index
      );
      props.setTableDataSource(newList)
    } catch {
      console.log("error");
    }
  }

  const cancel = () => {
    message.error("Click on No");
  };

  const column: any[] = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
      render: (text: string, record: any, index: number) => {
        const { sex } = record || {};
        return (
          <>
            {sex === "Man" && <Tag color="green">{sex}</Tag>}
            {sex === "Woman" && <Tag color="red">{sex}</Tag>}
          </>
        );
      },
    },
    {
      title: "操作",
      dataIndex: "action",
      width: 200,
      render: (text: any, record:any, index: number) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              type="primary"
              onClick={() => {
                props.setVisible(true);
                props.setTitle("edit");
                setRecords(record)
              }}
            >
              编辑
            </Button>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => deleteInfo(index)}
              onCancel={() => cancel()}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>删除</Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return {
    column,
    records
  };
}
