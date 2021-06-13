interface CowinResponse {
    center_id: string
    name: string
    address: string
    state_name: string
    district_name: string
    block_name: string
    pincode: number
    lat: number
    long: number
    from: string
    to: String
    fee_type: string
    sessions: Array<sessions>
}

interface sessions {
    session_id: string
    date: string
    available_capacity: number
    min_age_limit: number
    vaccine: string
    slots: Array<string>
    available_capacity_dose1: string
    available_capacity_dose2: string

}