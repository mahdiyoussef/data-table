import React,{useState} from "react";






const appDateFormat:any = ['en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
}]


const devideData = (data: any, divisionNumber: number) => {
    const length: number = data?.length;

    if (length === 0) {
        return {
            length: length,
            data: null,
            pages:0
        };
    } else {
        if (length <= divisionNumber) {
            let principalData: any = {};
            principalData["1"] = data;
            return {
                length: length,
                data: principalData,
                pages:1
            };
        } else {
            let pages = Math.ceil(length / divisionNumber); // Fix: Use Math.ceil()

            let principalData: any = {};

            for (let i = 0; i < pages; i++) {
                principalData[`${i + 1}`] = data.slice(i * divisionNumber, (i + 1) * divisionNumber);
            }

            return {
                length: length,
                data: principalData,
                pages:pages
            };
        }
    }
};


interface SvgProps {
    width: number | string;
    height: number | string;
    style?:React.CSSProperties;
    fill?:string;
}


interface UpArrowIconProps extends SvgProps{
    AdditionalStyle?:string;
}

type DownIconProps = UpArrowIconProps;


function UpArrowIcon({
    AdditionalStyle,
    width,
    height,
    fill,
    style
}:UpArrowIconProps){
    return (
        <svg style={style} className={AdditionalStyle} fill={fill} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.293,1.293a1,1,0,0,1,1.414,0l6,6a1,1,0,0,1-1.414,1.414L13,4.414V22a1,1,0,0,1-2,0V4.414L6.707,8.707A1,1,0,0,1,5.293,7.293Z"/>
        </svg>
    )
}


function DownIcon({
    width,
    height,
    style,
    fill,
    AdditionalStyle
}:DownIconProps){
    return (
        <svg className={AdditionalStyle} style={style} fill={fill} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.293,14.707a1,1,0,0,1,1.414-1.414L11,19.586V2a1,1,0,0,1,2,0V19.586l6.293-6.293a1,1,0,0,1,1.414,1.414l-8,8a1,1,0,0,1-.325.216.986.986,0,0,1-.764,0,1,1,0,0,1-.325-.216Z"/>
        </svg>
    )
}

function OptionsTwoIcon({width,height,fill,style}:SvgProps){
    return (
        <svg width={width} height={height} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm0-6a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" fill={fill}/>
        </svg>
    )
}


function RightArrowIcon({width,height,fill,style}:SvgProps){
    return (
        <svg width={width} height={height} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill={fill}/>
        </svg>
    )
}

function LeftArrowIcon({width,height,style,fill}:SvgProps){
    return (
        <svg width={width} height={height} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill={fill}/>
        </svg>
    )
}


interface StatusFieldCasesProps {
    value:string;
    TextToReplace?:string;
    BgColor:string;
    TextColor:string;
    Icon?:React.JSX.Element;
}

interface StatusFieldDefaultCase {
    BgColor:string;
    TextColor:string;
    Icon?:React.JSX.Element;
}

export interface StatusFieldConfigProps {
    name:string;
    cases:StatusFieldCasesProps[];
    defaultCase:StatusFieldDefaultCase;
}

interface DataTableProps{
    style?:{
        ThHoverColor?:string;
        SurroundedBorderWidth?:string;
        SurroundedBorderColor?:string;
        width?:number | string;
        left?:number | string;
        height?:string | number;
    };
    AdditionalStyle?:string;
    values?:any | any[];
    columns?:{
        key?:string,
        value?:string,
        object?:boolean,
        StatusField?:boolean,
        isDate?:boolean
    }[];
    RowsNumber?:number;
    OptionButtons?:RowOptionSelectedButtonProps[];
    RowOptionStyle?:{
        bgcolor?:string;
        right?:string;
        rounded?:string;
        padding?:string;
        width?:string;
        paddingTop?:string;
        paddingBottom?:string;
    },
    includeOptions?:boolean;
    StatusFieldsConfig?:StatusFieldConfigProps[];
    onFilter?:(column:string,type:string)=>Promise<void> | void;
    includeRowNumber?:boolean;
    RowNumberName?:string;
}




function DataTable({
    style = {
        ThHoverColor: "blue-900",
        SurroundedBorderWidth: "[1px]",
        SurroundedBorderColor: "gray-500",
        width: "full",
        height: "[30rem]"
    },
    includeOptions = false,
    AdditionalStyle,
    RowsNumber = 12,
    columns,
    values,
    OptionButtons,
    RowOptionStyle,
    StatusFieldsConfig,
    onFilter,
    includeRowNumber = false,
    RowNumberName = "No"
}: DataTableProps) {
    // Style configurations for table elements
    const tableHeaderStyle = `font-qsbold hover:bg-${style.ThHoverColor} hover:text-white`;
    const tableCellStyle = "hover:font-qsmedium";
    const optionsHeaderStyle = `hover:bg-${style.ThHoverColor} min-w-24 hover:text-white`;
    const optionsCellStyle = "";

    // State for pagination and row selection
    const [currentPage, setCurrentPage] = useState("1");
    const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

    // Function to handle row selection
    const handleRowSelection = (rowIndex: number) => {
        if (rowIndex === selectedRowIndex) {
            setSelectedRowIndex(null);
        } else {
            setSelectedRowIndex(rowIndex);
        }
    }

    // Divide the data into pages
    let { length: totalItems, data: paginatedData, pages: totalPages } = devideData(values, RowsNumber);
    
    // Function to handle navigation to the next page
    const handleNextPage = () => {
        let currentPageNumber = parseInt(currentPage);
        if (currentPageNumber < totalPages) {
            setCurrentPage(`${currentPageNumber + 1}`);
        }
    }

    // Function to handle navigation to the previous page
    const handlePreviousPage = () => {
        let currentPageNumber = parseInt(currentPage);
        if (currentPageNumber > 1) {
            setCurrentPage(`${currentPageNumber - 1}`);
        }
    }

    // Function to get status component configuration based on field value
    const getStatusConfig = (statusFieldName: string, caseValue: string) => {
        const statusField = StatusFieldsConfig?.find((field) => field.name == statusFieldName);
        const caseConfig = statusField?.cases.find((c) => c.value == caseValue);

        return caseConfig ? caseConfig : statusField?.defaultCase;
    }

    return (
        <>
            <div className={`w-${style.width} h-${style.height}`}>
                <table style={{width:'95%', marginLeft:'2.5%'}} className={`border-${style.SurroundedBorderWidth} border-${style.SurroundedBorderColor} ${AdditionalStyle}`}>
                    {/* Table header */}
                    <tr className="w-10/12 border-b-[1px] border-t-[1px] font-qsmedium bg-blue-200 pb-2" style={{marginLeft:`${1/12*100}%`}}>
                        {includeRowNumber && <th className={tableHeaderStyle}>{RowNumberName}</th>}
                        {
                            columns?.map((column) =>
                                <th className={tableHeaderStyle} id={column.key}>
                                    <ColumnButton Column={column} onFilter={(column: string, type: string) => {
                                        onFilter && onFilter(column, type);
                                    }} />
                                </th>
                            )
                        }
                        {includeOptions && <th className={optionsHeaderStyle}>Options</th>}
                    </tr>
                    {/* Table body */}
                    {
                        totalItems > 0 ? paginatedData[currentPage]?.map((rowData: any, rowIndex: any) => {
                            return (
                                <tr id={`KEY${rowData?._id}`} className="w-10/12 text-center font-qsregular border-b-[1px] border-gray-400" style={{marginLeft:`${1/12*100}%`}}>
                                    {includeRowNumber && <td className={tableCellStyle}>{rowIndex + 1}</td>}
                                    {
                                        rowData ? columns?.map((column) => {
                                            let cellValue: any = column.object ? rowData[`${column?.value?.split(".")[0]}`][`${column?.value?.split(".")[1]}`] : rowData[`${column?.value}`];
                                            let statusConfig: any = getStatusConfig(column.value ? column.value : '', cellValue);
                                            cellValue = column.isDate && typeof cellValue == 'string' ? new Date(cellValue).toLocaleDateString(appDateFormat[0], appDateFormat[1]) : cellValue;

                                            return (
                                                <td id={rowData?._id} className={tableCellStyle} 
                                                style={column.StatusField ? {justifyContent: 'center'} : {}}>
                                                    {
                                                        column.StatusField ?
                                                        <StatusField value={cellValue} TextToReplace={statusConfig?.TextToReplace ? statusConfig?.TextToReplace : undefined} Icon={statusConfig.Icon ? statusConfig.Icon : <></>} BgColor={statusConfig.BgColor} TextColor={statusConfig.TextColor} />
                                                        : cellValue
                                                    }
                                                </td>
                                            )
                                        }) : <></>
                                    }
                                    {
                                        includeOptions &&
                                        <td className={optionsCellStyle}>
                                            <button onClick={() => handleRowSelection(rowIndex)}>
                                                <OptionsTwoIcon width={20} height={20} style={{marginTop: 5}} fill="black" />
                                            </button>
                                            {
                                            selectedRowIndex === rowIndex && 
                                                <RowOptions style={RowOptionStyle}>
                                                    {
                                                        OptionButtons?.map((props) => {
                                                            return (
                                                                <RowOptionButton onclick={() => props.onclick(rowData)} Icon={props?.Icon} Name={props?.Name} TitleColor={props?.TitleColor} ButtonAdditionalStyle={props?.ButtonAdditionalStyle} />
                                                            )
                                                        })
                                                    }
                                                </RowOptions>
                                            }
                                        </td>
                                    }
                                </tr>
                            )
                        }) : <></>
                    }
                </table>
            </div>
            {/* Pagination controls */}
            {
                totalItems > RowsNumber && <>
                    <div className="flex justify-end mr-[2%] mt-2">
                        <button onClick={handlePreviousPage} className="w-10 p-2 mr-1 flex justify-center rounded-sm hover:bg-blue-200">
                            <LeftArrowIcon width={20} height={20} fill="black" />
                        </button>
                        <button onClick={handleNextPage} className="w-10 p-2 mr-1 flex justify-center rounded-sm hover:bg-blue-200">
                            <RightArrowIcon width={20} height={20} fill="black" />
                        </button>
                    </div>
                    <div className="w-full text-right pr-[3.8%] font-qsregular">
                        {(parseInt(currentPage) - 1) * RowsNumber} - {parseInt(currentPage) === totalPages ? totalItems : parseInt(currentPage) * RowsNumber}
                    </div>
                </>
            }
        </>
    )
}

export default DataTable;


interface StatusFieldProps {
    value:any,
    TextToReplace?:string,
    BgColor?:string,
    TextColor?:string,
    Icon?:React.JSX.Element
}

export function StatusField({value,Icon,TextToReplace,BgColor,TextColor}:StatusFieldProps){
    return (
        
        <div className="w-full flex justify-center font-qsmedium">  
            <span style={{color:TextColor?TextColor:'black',backgroundColor:BgColor?BgColor:'green'}} className="flex space-x-1 justify-center w-fit mt-0.5 p-0.5 rounded-md px-1">
                {Icon?Icon:''}  
                <span>{TextToReplace?TextToReplace:value}</span>
            </span>
        </div>  
    )
}


export interface ColumnButtonProps{
    onFilter?:(ColumnName:string,type:string)=>void | Promise<void>;
    Column?:{
        key?:string,
        value?:string
    };
}

export function ColumnButton({Column,onFilter}:ColumnButtonProps){
    const [filterType,setFilterType]=useState("asc");

    const SwitchFilterType=()=>{
        let filter = filterType=="asc"?"desc":"asc";
        setFilterType(filter);
        onFilter && onFilter(Column?.value?Column.value:'',filterType)
    }


    return(
        <span>
            <button onClick={()=>{ onFilter && onFilter(Column?.value?Column.value:'',filterType); }}>
                {Column?.key}
            </button>
            <button className="ml-2" onClick={SwitchFilterType}>
                {
                    filterType==="desc"?<DownIcon width={13} AdditionalStyle="hover:fill-white" height={13} fill="black" />
                    :<UpArrowIcon width={14} AdditionalStyle="hover:fill-white" height={14} fill="black" />
                }
            </button>
        </span>
    )
}

export interface RowOptionsProps{
    children?:React.JSX.Element[] | React.JSX.Element;
    style?:{
        bgcolor?:string;
        right?:string;
        rounded?:string;
        padding?:string;
        width?:string;
        paddingTop?:string;
        paddingBottom?:string;
    }
}

export function RowOptions({
    children,
    style={
        bgcolor:"white",
        right:"12",
        width:"44",
        padding:"1",
        paddingTop:"2",
        paddingBottom:"2"
    }
    }:RowOptionsProps){
    return (
        <div className={`bg-${style.bgcolor} absolute w-${style.width} p-${style.padding} right-${style.right} rounded pt-${style.paddingTop} pb-${style.paddingBottom} max-h-52 overflow-y-scroll bluescrollbar`}>
            {children}
        </div>
    )
}

export interface RowOptionSelectedButtonProps {
    Icon?:React.JSX.Element;
    Name?:string;
    onclick:(data:any)=> void | Promise<void> | any;
    TitleColor?:string;
    ButtonAdditionalStyle?:string;
}

export interface RowOptionButtonProps {
    Icon?:React.JSX.Element;
    Name?:string;
    onclick?:()=> void | Promise<void> | any;
    TitleColor?:string;
    ButtonAdditionalStyle?:string;
}

export function RowOptionButton({
        Icon,
        Name,
        onclick,
        ButtonAdditionalStyle,
        TitleColor="black"
    }:RowOptionButtonProps){
    return (
        <button className={`flex mt-1 ${ButtonAdditionalStyle} font-qsemibold hover:font-qsbold`} onClick={onclick}>
            {Icon}
            <span className={`ml-1 text-${TitleColor}`}>{Name}</span>
        </button>
    )
}