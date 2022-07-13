
import styles from './datatable.module.scss';


interface Config {
    name: String;
    header: String[];
    actions: object[];
    fieldnames: object[]
}

type DataTableProps = {
    config: Config,
    data: object[]
}
const DataTable  = ({ config, data }: DataTableProps) => {


    const image = (name: string) => {
        // let img = !!name ? api.fxns.endpoint+'/img/'+name : api.fxns.endpoint+'/img/vt.jpeg';
        // return <div className={styles.imgcontainer}>
        //     <div className={styles.imgwrapper}>
        //         <img src={img} alt="sample.png" className={styles.img}/>
        //     </div>
        // </div>
    }
    const trigger = (path: string,item: Object) => {
        // history.push({
        //     pathname: path,
        //     state: { item: item },
        //   });
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.tablewrapper}>
                    <h3>{ config?.name }</h3>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {
                                    config?.header.map((d,k) => {
                                        return (
                                        <th key={k} className={styles.th}>
                                        { d }
                                        </th>
                                        )
                                    })
                                }
                                {config?.actions.length > 0 ? <th className={styles.th}>Actions</th> : ''}
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {
                                data.map((item: {[key: string]: any},key: number) => {
                    
                                    return (
                                      <tr key={key} className={styles.tr} id={styles.tbrow}>
                                          {/* <td data-column={config.header[0]} className={styles.td}>{key+1}</td> */}
                                          {
                                              config?.fieldnames.map((fieldname: {[key: string]: any}, kk: number) => {

                                                  var val = fieldname?.format === 'd' ? parseFloat(item[fieldname?.name]).toFixed(2) : fieldname?.format === 'i' ? image(item[fieldname?.name]) : item[fieldname?.name];

                                                //   col = kk + 1
                                                  return (
                                                      <td key={kk} data-column={config.header[kk+1]} className={styles.td}>
                                                          <div className={styles.tdmain}>{val}</div>
                                                          {/* <div className={styles.tdsub}>{val}</div> */}
                                                      </td>
                                                  )
                                              })
                                          }
                                          {/* <td className={styles.td} data-column={config.header[col+1]}>
                                              { config.status.map((s,sk)=> <span key={sk} className={styles.active}>{s}</span>) }
                                          </td> */}
                                          <td className={styles.td}>
                                              { config?.actions.map((action:{[key: string]: any},actionkey) => <span key={actionkey} className={styles.action} onClick={() => trigger(action?.path,item)}>{action?.function}</span>)}
                                          </td>
                                      </tr>
                                    );
                                  })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    )
}

export default DataTable;