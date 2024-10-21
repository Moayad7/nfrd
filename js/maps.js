const ref_centers = [
    {
      city: "Ref Demcheq 1",
      center_name: "Al-Husainyah youth center",
      address: "Ref Demcheq - Al-Husainyah",
      phone: "+963963963963",
      services:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam debitis et eaque, placeat quo. Dicta.",
      isOpen: true,
    },
  
    {
      city: "Ref Demcheq 2",
      center_name: "Al-Husainyah woman center",
      address: "Ref Demcheq - Al-Husainyah",
      phone: "+963963963963",
      services:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam debitis et eaque, placeat quo. Dicta.",
      isOpen: false,
    },
    {
      city: "Ref Demcheq 3",
      center_name: "Al-Husainyah youth center",
      address: "Ref Demcheq - Al-Husainyah",
      phone: "+99999999999",
      services:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam debitis et eaque, placeat quo. Dicta.",
      isOpen: false,
    },
  ];
  
  const swaida_centers = [
    {
      city: "swaida",
      center_name: "swaida youth center",
      address: "swaida - swaida",
      phone: "+963963963963",
      services:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam debitis et eaque, placeat quo. Dicta.",
      isOpen: true,
    },
  ];
  
  const homs_centers = [
    {
      city: "homs",
      center_name: "homs youth center",
      address: "homs - homs",
      phone: "+963963963963",
      services:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam debitis et eaque, placeat quo. Dicta.",
      isOpen: true,
    },
  ];



const tables = document.querySelector(".centers_tables");
const ref_demashq = document.querySelector("#ref");
const homs = document.querySelector("#homs");
const swaida = document.querySelector("#swaida");




const show_ref_centers = () => {
    tables.replaceChildren();
    ref_centers.map((item)=>{
        
        const center = document.createElement("div");
        center.innerHTML=`
        <details class="table" ${item.isOpen ? "open" : "" }>
                    <summary>${item.city}</summary>
                    <div class="table-row">
                        <div class="first-table-cell">
                            <img src="assets/details/courthouse.svg" alt="">
                            <p>City</p>
                        </div>
                        <div class="second-table-cell">
                            <p class="value">${item.city}</p>
                        </div>
                    </div>
                    <hr>
    
                    <div class="table-row">
                        <div class="first-table-cell">
                            <img src="assets/details/buildings.svg" alt="">
                            <p>Center Name</p>
                        </div>
                        <div class="second-table-cell">
                            <p class="value">${item.center_name}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="table-row">
                        <div class="first-table-cell">
                            <img src="assets/details/location.svg" alt="">
                            <p>Address</p>
                        </div>
                        <div class="second-table-cell">
                            <p class="value">${item.address}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="table-row">
                        <div class="first-table-cell">
                            <img src="assets/details/call-calling.svg" alt="">
                            <p>Phone</p>
                        </div>
                        <div class="second-table-cell">
                            <p class="value">${item.phone}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="table-row">
                        <div class="first-table-cell">
                            <img width="25px" src="assets/details/star.svg" alt="">
                            <p>Services</p>
                        </div>
                        <div class="second-table-cell">
                            <p class="value">${item.services}</p>
                        </div>
                    </div>
    
    
                </details>
        `;
    
        tables.appendChild(center);
    })
    
}


const show_swaida_centers = () => {
    tables.replaceChildren();
    swaida_centers.map((item)=>{
        const center = document.createElement("div");
        center.innerHTML=`
        <details class="table" ${item.isOpen ? "open" : "" }>
                    <summary>${item.city}</summary>
                    <div class="table-row">
                        <div class="first-table-cell">
                            <img src="assets/details/courthouse.svg" alt="">
                            <p>City</p>
                        </div>
                        <div class="second-table-cell">
                            <p class="value">${item.city}</p>
                        </div>
                    </div>
                    <hr>
    
                    <div class="table-row">
                        <div class="first-table-cell">
                            <img src="assets/details/buildings.svg" alt="">
                            <p>Center Name</p>
                        </div>
                        <div class="second-table-cell">
                            <p class="value">${item.center_name}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="table-row">
                        <div class="first-table-cell">
                            <img src="assets/details/location.svg" alt="">
                            <p>Address</p>
                        </div>
                        <div class="second-table-cell">
                            <p class="value">${item.address}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="table-row">
                        <div class="first-table-cell">
                            <img src="assets/details/call-calling.svg" alt="">
                            <p>Phone</p>
                        </div>
                        <div class="second-table-cell">
                            <p class="value">${item.phone}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="table-row">
                        <div class="first-table-cell">
                            <img width="25px" src="assets/details/star.svg" alt="">
                            <p>Services</p>
                        </div>
                        <div class="second-table-cell">
                            <p class="value">${item.services}</p>
                        </div>
                    </div>
    
    
                </details>
        `;
    
        tables.appendChild(center);
    })
    
}


const show_homs_centers = () => {
    tables.replaceChildren();

    homs_centers.map((item)=>{
            const center = document.createElement("div");
            center.innerHTML=`
            <details class="table" ${item.isOpen ? "open" : "" }>
                        <summary>${item.city}</summary>
                        <div class="table-row">
                            <div class="first-table-cell">
                                <img src="assets/details/courthouse.svg" alt="">
                                <p>City</p>
                            </div>
                            <div class="second-table-cell">
                                <p class="value">${item.city}</p>
                            </div>
                        </div>
                        <hr>
        
                        <div class="table-row">
                            <div class="first-table-cell">
                                <img src="assets/details/buildings.svg" alt="">
                                <p>Center Name</p>
                            </div>
                            <div class="second-table-cell">
                                <p class="value">${item.center_name}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="table-row">
                            <div class="first-table-cell">
                                <img src="assets/details/location.svg" alt="">
                                <p>Address</p>
                            </div>
                            <div class="second-table-cell">
                                <p class="value">${item.address}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="table-row">
                            <div class="first-table-cell">
                                <img src="assets/details/call-calling.svg" alt="">
                                <p>Phone</p>
                            </div>
                            <div class="second-table-cell">
                                <p class="value">${item.phone}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="table-row">
                            <div class="first-table-cell">
                                <img width="25px" src="assets/details/star.svg" alt="">
                                <p>Services</p>
                            </div>
                            <div class="second-table-cell">
                                <p class="value">${item.services}</p>
                            </div>
                        </div>
        
        
                    </details>
            `;
        
            tables.appendChild(center);
        })
    
    
    
        
            
}


ref_demashq.addEventListener("click", show_ref_centers)
homs.addEventListener("click", show_homs_centers)
swaida.addEventListener("click", show_swaida_centers)

show_ref_centers();
// show_swaida_centers();
// show_homs_centers();