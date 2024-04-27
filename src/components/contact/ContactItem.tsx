import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
/* CSS import */
import style from "../../styles/Contact.module.css";

interface IProps {
  prop: string;
  value: string;
  path?: string;
}

function ContactItem({ prop, value, path }: IProps) {
  const copyText = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      alert("📌 클립보드로 복사되었습니다.\n\n" + text);
    } catch (error) {
      console.error("클립보드 복사실패: ", error);
    }
  };
  return (
    <>
      <div className={style.declaration}>
        <div className={style.property}>{prop}</div>:
        {path ? (
          <Link
            to={path}
            target="_blank"
            className={style.value}
            data-tooltip-id="contactTooltip"
            data-tooltip-content="👈 바로가기"
          >
            <Tooltip
              id="contactTooltip"
              place="right"
              style={{
                fontSize: "15px",
                padding: "0 15px",
                marginLeft: "15px",
                backgroundColor: "var(--toolTip-bg)",
                color: "var(--text-01)",
                boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)",
              }}
              border="1px solid var(--toolTip-border)"
            />
            {value}
          </Link>
        ) : (
          <div
            onClick={() => copyText(value)}
            className={style.value}
            data-tooltip-id="contactTooltip"
            data-tooltip-content="📋 복사하기"
          >
            <Tooltip
              id="contactTooltip"
              place="right"
              style={{
                fontSize: "15px",
                padding: "0 15px",
                marginLeft: "15px",
                backgroundColor: "var(--toolTip-bg)",
                color: "var(--text-01)",
                boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)",
              }}
              border="1px solid var(--toolTip-border)"
            />
            {value}
          </div>
        )}
        ;
      </div>
    </>
  );
}

export default ContactItem;
