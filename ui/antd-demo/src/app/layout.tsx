import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Master from "../layout/default/master";

const RootLayout = ({ children }: React.PropsWithChildren) => (

  <html lang="en">
    {/* <Master> */}
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
    
  {/* </Master> */}
  </html>
);

export default RootLayout;