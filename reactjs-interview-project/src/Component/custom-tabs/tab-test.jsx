import Tabs from "./tabs";
import './tab.css'

const RandomComponent = () => {
  return <div>Some random content</div>;
};

export default function TabsTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is the content of Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is the content of Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
