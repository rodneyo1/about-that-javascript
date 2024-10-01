function getAcceleration(obj) {
    // Destructure obj properties
    const { f, m, Δv, Δt, d, t } = obj;

    //  using a = F / m
    if (f !== undefined && m !== undefined && m !== 0) {
        return f / m;
    }

    //  using a = Δv / Δt
    if (Δv !== undefined && Δt !== undefined && Δt !== 0) {
        return Δv / Δt;
    }

    // using a = 2d / t^2
    if (d !== undefined && t !== undefined && t !== 0) {
        return (2 * d) / (t * t);
    }

    return "impossible";
}
