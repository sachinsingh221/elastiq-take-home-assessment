import styled from 'styled-components';
import WithDirection from './rtl';

const SiteStyle = styled.div`

.site-layout::-webkit-scrollbar {
    display: none;
}

.site-layout {
    scrollbar-width: none;
    height: 100vh;
    overflow-x: hidden;

    .site-header {
      background: #096dd9;
      // width: auto;
      // height: auto;
      // padding: 0px;
      .ant-typography{
        color: #f5f5f5;
        font-size: 8pt
      }
    }

    .site-footer {
      width: auto;
      height: auto;
      padding: 0px;
    }

    .site-footer-app {
      width: 100%;
      height: auto;
      padding: 0px;
      position: fixed;
      bottom: 0;
      left: 0;
      borderTop: 1px solid #e8e8e8;
    }

    .site-content {
      flex-shrink: 0 !important;
      background: #FFFFFF !important;
      width: 100% !important;
      padding: 0% 5% 0% 5%;
    }
  }
`;

export default WithDirection(SiteStyle);
