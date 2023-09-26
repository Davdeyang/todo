import React from "react";
import { Button, Table } from "antd";
import useColumn from "./Todo/hooks/useColumn";
import InfoModal from "./Todo/Detail/inforModle";
import Container from "./Todo/compnent/container";
import './styles.less';

function App() {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState("");
  const [tableDataSource, setTableDataSource] = React.useState([
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      sex: "Man",
    },
    {
      key: "2",
      name: "荪女",
      age: 42,
      sex: "Woman",
    },
  ]);

  const { column,records } = useColumn({
    tableDataSource,
    setVisible,
    setTitle,
    setTableDataSource,
  });

  return (
    <Container title="用户列表">
      <div style={{textAlign:'right', padding: 10}}>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
            setTitle('create');
          }}
        >
          创建个人信息
        </Button>
      </div>
      <Table dataSource={tableDataSource} columns={column} />
      <InfoModal visible={visible} setVisible={setVisible} title={title} dataSource={tableDataSource} setDataSource={setTableDataSource} records={records}/>
    </Container>
  );
}

export default App;
