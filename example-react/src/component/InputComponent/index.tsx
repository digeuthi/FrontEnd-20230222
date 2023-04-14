import { Dispatch, SetStateAction } from 'react'

interface Props{
    label: string;
    type: string;
    name: string;
    setter: Dispatch<SetStateAction<string>>;
    maxLength: number;
    iconClass: string;
}

export default function NaverInput(props: Props) {

const {label, type, name, maxLength, iconClass, setter} = props;
  return ( //반복되는 값 빼주고, 어떤 변수 써야할지 정한다 : 아이디, type ... 6개의 변수 잡기
    <div className="input-row">
                    <div className="icon-shell">
                      <span className={iconClass}>
                        <span className="blind">{label}</span>
                      </span>
                    </div>
                    <input type={type}
                    className="input-text" 
                    maxLength={maxLength} 
                    placeholder={label}
                    name= {name}
                    onChange={(event) => setter(event.target.value)}/>
                  </div>
  )
}
