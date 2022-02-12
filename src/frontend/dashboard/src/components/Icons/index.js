import React from 'react'
import { SaveFilled, DashboardFilled, DashboardOutlined, PieChartOutlined, AreaChartOutlined, BarChartOutlined, DotChartOutlined, LineChartOutlined, FileExcelOutlined } from '@ant-design/icons'

const Icons = ({ type }) => {
  switch (type) {
    case "DashboardFilled":
      return <DashboardFilled />
    case "DashboardOutlined":
      return <DashboardOutlined />
    case "PieChartOutlined":
      return <PieChartOutlined />;
    case "AreaChartOutlined":
      return <AreaChartOutlined />;
    case "BarChartOutlined":
      return <BarChartOutlined />;
    case "DotChartOutlined":
      return <DotChartOutlined />;
    case "LineChartOutlined":
      return <LineChartOutlined />;
    case "FileExcelOutlined":
      return <FileExcelOutlined />
    case "SaveFilled":
      return <SaveFilled />
    default:
      return null;
  }


}

export default Icons
