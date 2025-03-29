export const ReqWithoutCode = {
    body: {
        status: "any_status",
        model: "any_model",
        certificate: "string",
        serieNumber: "number",
        calibrationCate: "string",
        calibrationFrequency: "string",
        nextCalibraton: "string",
        toleranceProcess: "string",
        observation: "string",
    }
}
export const ReqWithoutStatus = {
    body: {
        code: "any_code",
        model: "any_model",
        certificate: "string",
        serieNumber: "number",
        calibrationCate: "string",
        calibrationFrequency: "string",
        nextCalibraton: "string",
        toleranceProcess: "string",
        observation: "string",
    }
}