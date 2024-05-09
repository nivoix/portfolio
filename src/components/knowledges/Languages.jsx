import Datas from "../../assets/data.json";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import CustomTooltip from "../../utils/CustomTooltips";

const Languages = () => {
  const datas = Datas.skills;
  return (
    <div className="rechartsContent">
      <h3>Compétences</h3>
      <div className="graphContent">
        <ResponsiveContainer>
          <BarChart
            width={100}
            height={100}
            data={datas}
            barSize={15}
            margin={{ top: 0, right: 30, bottom: 0, left: 20 }}
            layout="vertical"
          >
            <XAxis hide axisLine={false} type="number" display="none" />
            <YAxis type="category" axisLine={false} display="none" />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                fill: "#6c77f4",
              }}
            />
            <Legend verticalAlign="bottom" align="center" />
            <Bar
              dataKey="xp"
              name="années d'expérience"
              fill="#4fedd2"
              radius={[0, 50, 50, 0]}
            >
              <LabelList dataKey="xp" position="right" fill="#ddd" />
              <LabelList dataKey="value" position="left" fill="#ddd" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Languages;
