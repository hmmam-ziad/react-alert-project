
import './index.css'
import Alert from './Components/Alert/Alert'
import { AlertTriangle, Ban, Bell, CheckCheck, Info} from 'lucide-react'

function App() {

  return (
    <>
      <div style={{ margin: "2rem" }}>
  <Alert type={"alert-default"} icon={<Bell size={20} />} title={"Upgrade your plan"}>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque{" "}
      <a href="/">laboriosam</a> iste totam officiis beatae quas.
    </p>
  </Alert>

  <Alert
    type={"alert-info"}
    icon={<Info size={20} />}
    title={"Note"}
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
    laboriosam iste totam officiis beatae sint non quas."
  />
  <Alert
    type={"alert-success"}
    icon={<CheckCheck size={20} />}
    title={"Your order has been processed"}
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
    laboriosam iste totam officiis beatae sint non quas."
  />
  <Alert
    type={"alert-danger"}
    icon={<Ban size={20} />}
    title={"Something went wrong"}
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
    laboriosam iste totam officiis beatae sint non quas."
  />
  <Alert
    type={"alert-warning"}
    icon={<AlertTriangle size={20} />}
    title={"Tips & Tricks"}
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
    laboriosam iste totam officiis beatae sint non quas."
  />
</div>
   </>
  )
}

export default App
